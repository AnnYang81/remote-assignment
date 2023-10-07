// requestSync.js
//npm install sync-request
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const https = require('https');
const syncRequest = require('sync-request');

function requestSync(url) {
    const start = new Date().getTime();
    try {
        const response = syncRequest('GET', url);
        const end = new Date().getTime();
        const executionTime = end - start;
        console.log(executionTime + ' ms');
    } catch (error) {
        console.error('Error:', error.message);
    }
}
console.time('total');
requestSync(url);
requestSync(url);
requestSync(url);
console.timeEnd('total');