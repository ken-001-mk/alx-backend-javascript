function getPaymentTokenFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('my_payment_token');
      }, 300);
    });
  }
  
  module.exports = getPaymentTokenFromAPI;