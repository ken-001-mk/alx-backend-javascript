const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call calculateNumber', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
        stub.restore();
        spy.restore();
    });
});