var fs = require('fs');

var fileName = process.argv[2];
var buff = fs.readFileSync(fileName);
var bufferStr = buff.toString()
var resultArr = bufferStr.split('\n');

console.log(resultArr.length - 1)
