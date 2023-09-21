const assert = require('assert');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('returns a resolved promise with the object { data: "Successful response from the API" } when success is true', () => new Promise((done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        }).catch((error) => {
            done(error);
        });
    }));

    it('returns a rejected promise when success is false', () => new Promise((done) => {
        getPaymentTokenFromAPI(false, (err) => {
            try {
                expect(err).to.eql(Error('The fake API is not working currently'));
                done();
            } catch (error) {
                done(error);
            }
        })
    }));
});