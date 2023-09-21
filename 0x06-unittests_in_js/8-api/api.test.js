const http = require('http');
const app = require('./api');

function runTests(tests) {
    let failed = 0;
    for (const [name, fn] of tests) {
        try {
            fn();
            console.log(`\x1b[32m[PASS]\x1b[0m ${name}`);
        } catch (err) {
            failed++;
            console.log(`\x1b[31m[FAIL]\x1b[0m ${name}`);
            console.log(`\t${err.message}`);
        }
    }
    return failed;
}

function expectStatus(res, statusCode) {
    if (res.statusCode !== statusCode) {
        throw new Error(`Expected status ${statusCode} but got ${res.statusCode}`);
    }
}

function expectBody(res, expectedbody) {
    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        if (body !== expectedbody) {
            throw new Error(`Expected body '${expectedbody}' but got '${body}'`);
        }
    });
}

const tests = [
    ['Returns status code 200', () => {
        const request = http.get('http://localhost:7865', (res) => {
            expectStatus(res, 200);
        });
    }],
    ['Returns the string "Welcome to the payment API system!"', () => {
        const request = http.get('http://localhost:7865', (res) => {
            expectBody(res, 'Welcome to the payment API system!');
        });
    }],
]

console.log('Running tests  for index page');
runTests(tests);
