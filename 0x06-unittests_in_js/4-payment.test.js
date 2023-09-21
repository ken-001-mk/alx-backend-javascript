const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber');
    });

    afterEach(() => {
        stub.restore();
    });

    it('sendPaymentRequestToApi of the calculateNunber method of utils', () => {
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 10');
        spy.restore();
    });
});