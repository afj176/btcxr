'use strict';
var https = require('https'),
    isBitcoinBin = (typeof process.argv[1] !== "undefined") ? process.argv[1].indexOf("bin/bitcoin") : -1;

var btcxr = function (currency, cb){
  
  var getBitcoin = function(r) {
    var bd = '';
    
    r.on('data', function(d) { bd += d; })
     .on('end', function() {
      var b = JSON.parse(bd),
          type = b[currency],
          currencyKeys = Object.keys(b).join(",");      
      
      if((isBitcoinBin !== -1) && (typeof type == 'undefined') && (typeof currency == "undefined")){
        cb('Usage: bitcoin <currency>');
        cb('Available currencies: ( ' + currencyKeys + ' )');
        cb('ex: bitcoin USD');
      }

      currency = (typeof currency !== 'undefined') ? currency : 'USD';
      if(typeof type == 'undefined'){
        type = b["USD"];
      }

      if(isBitcoinBin !== -1){
        cb(currency + ': ' + type.symbol + type.last);
      }else{
        cb(type);
      }

    });

  };

  return https.get({ host: 'blockchain.info', path: '/ticker' }, getBitcoin);
};

module.exports = btcxr;