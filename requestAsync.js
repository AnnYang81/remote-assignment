// requestAsync.js
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const https = require('https');
let n = 0;
function requestCallback(url, callback) {
    const start = new Date().getTime();
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const end = new Date().getTime();
            const executionTime = end - start;
            n++;
            callback(`${executionTime} ms`);
            if (n === 3) {
                console.timeEnd('total');
            }
        });
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
}
function requestPromise(url) {
    const start = new Date().getTime();
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const end = new Date().getTime();
                const executionTime = end - start;
                n++;
                resolve(`${executionTime} ms`);
                if (n === 3) {
                    console.timeEnd('total');
                }
            });
        }).on('error', (e) => {
            reject(`Error: ${e.message}`);
        });
    });
}
async function requestAsyncAwait(url) {
    const result = await requestPromise(url);
    console.log(result);
}
console.time('total');
requestCallback(url, console.log);
requestPromise(url).then(console.log);
requestAsyncAwait(url);