/**
 * eslint-disable jest/no-disabled-tests
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checks the output', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
        assert.strictEqual(calculateNumber(1.4, 3.2), 4);
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
        assert.strictEqual(calculateNumber(1.4, 3.4), 4);
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
        assert.strictEqual(calculateNumber(1.4, 3.8), 6);
    });
    it('checks negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, 3.8), 3);
        assert.strictEqual(calculateNumber(1.4, -3.8), -3);
        assert.strictEqual(calculateNumber(-1.4, -3.8), -5);
    });
    it('checks for urguments NaN', () => {
        assert.strictEqual(calculateNumber(NaN, 3.8), NaN);
        assert.strictEqual(calculateNumber(1.4, NaN), NaN);
        assert.strictEqual(calculateNumber(NaN, NaN), NaN);
    });
});
