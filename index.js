const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'database1.cun6hnvwo2mq.ap-northeast-1.rds.amazonaws.com',
    user: 'admin1',
    password: 'YangAnn9281',
    database: 'assignment'
});

connection.connect((err) => {
    if (err) console.error('Error connecting to MySQL:', err);
});

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const nameRE = /^[a-zA-Z0-9]+$/;
    const mailRE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { name, email, password } = req.body;
    function pwd_check() {
        var upper = /[A-Z]/, lower = /[a-z]/, number = /[0-9]/, special = /[^A-Za-z0-9]/, count = 0;
        if (upper.test(password)) count++;
        if (lower.test(password)) count++;
        if (number.test(password)) count++;
        if (special.test(password)) count++;
        return count;
    }

    if (!name || !email || !password) {
        return res.status(400).json({ "error": "name, email, and password are required" });
    } else if (!nameRE.test(name)) {
        return res.status(400).json({ "error": "name can only contains english alphabet and number" });
    } else if (!mailRE.test(email)) {
        return res.status(400).json({ "error": "email format incorrect" });
    } else if (pwd_check() < 3) {
        return res.status(400).json({ "error": "password format incorrect" });
    }

    connection.query('SELECT email FROM user WHERE email = ?', [email], (err, rows) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            return res.status(400).json({ "error": err });
        }

        if (rows.length > 0) {
            return res.status(409).json({ "error": "Email already exists." });
        }
        //從資料庫中找出最大的id+1
        connection.query('SELECT MAX(id) AS max_num FROM user', (err, results) => {
            if (err) {
                console.error('Error querying MySQL:', err);
                return;
            }
            const user = {
                id: results[0].max_num + 1,
                name: name,
                email: email
            };
            const response = {
                data: {
                    user: user,
                    "request-date": new Date().toUTCString()
                }
            };
            res.status(200).json(response);
        });
    });
});

app.get('/users', (req, res) => {
    const { id } = req.body;
    connection.query(`SELECT * FROM user WHERE id = ?`, [id], (error, results) => {
        if (error) {
            res.status(400).json({ error: 'Error querying the database' });
            throw error;
        }

        if (results.length === 0) {
            res.status(403).json({ error: 'User Not Existing' });
        } else {
            const user = {
                id: results[0].id,
                name: results[0].name,
                email: results[0].email
            };
            const response = {
                data: {
                    user: user,
                    "request-date": new Date().toUTCString()
                }
            };
            res.status(200).json(response);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});