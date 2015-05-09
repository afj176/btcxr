# btcxr [![Build Status](https://travis-ci.org/afj176/btcxr.svg?branch=master)](https://travis-ci.org/afj176/btcxr)
[![NPM](https://nodei.co/npm/btcxr.png?downloads=true&stars=true)](https://nodei.co/npm/btcxr/)

> btcxr is a wrapper around the Blockchain api [ticker method](https://blockchain.info/ticker)

### Installing globally as binary

```
$ npm install btcxr -g
```

#### Usage as binary

```bash
bitcoin JPY
//=> JPY: ¥28930.17
```

### Installing as module

```
$ npm install --save btcxr
```
#### Usage as module

```js
var btcxr = require('btcxr');

function bitcoinCallback(bitcoin){
  console.log('GBP: ' + bitcoin.symbol + bitcoin.last);
}

btcxr("GBP", bitcoinCallback);
```

## API

### btcxr(currency, callback)

#### currency

*Required*  
Type: `string`

Possible values: `USD,ISK,HKD,TWD,CHF,EUR,DKK,CLP,CAD,CNY,THB,AUD,SGD,KRW,JPY,PLN,GBP,SEK,NZD,BRL,RUB`

Defaults to: `USD`

#### callback(bitcoin)

Type: `function`

bitcoin properties:
    
* 15m
* last
* buy
* sell
* symbol

## License

MIT © [afj176](http://codeti.me)