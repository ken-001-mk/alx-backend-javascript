/**
 * stdin.js - a program that reads from stdin
 * If available, the first line of stdin will be assigned to the variable name
 */
process.stdout.write('Welcome to Holberton School, what is your name?');
process.stdin.on('reradable', () => {
    const name = process.stdin.read();

    if (name) {
        process.stdout.write(`Your name is: ${name}`);
    }
});
ptoess.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
