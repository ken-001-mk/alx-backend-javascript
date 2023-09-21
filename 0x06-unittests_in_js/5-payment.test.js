const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('sendPaymentRequestToApi of the calculateNunber method of utils', () => {
        const totalAmount = 100;
        const totalShipping = 20;
        const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
        sendPaymentRequestToApi(totalAmount, totalShipping);
        expect(consoleSpy.calledOnceWithExactly(`The total is: ${expectedSum}`)).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('sendPaymentRequestToApi of the calculateNunber method of utils', () => {
        const totalAmount = 10;
        const totalShipping = 20;
        const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
        sendPaymentRequestToApi(totalAmount, totalShipping);
        expect(consoleSpy.calledOnceWithExactly(`The total is: ${expectedSum}`)).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});