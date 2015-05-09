'use strict';
var assert = require('assert');
var btcxr = require('./');

it('Should be able to make the request to blockchain, select the GBP(UK). ', function (done) {
	
  function checkBitcoin(bitcoin){
    console.log('Received GBP: ' + bitcoin.symbol + bitcoin.last);
    assert.strictEqual(bitcoin['symbol'], '£');
    done();
  }

  btcxr("GBP", checkBitcoin);

});
