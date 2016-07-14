

var fs = require('fs');
var path = require('path');

var fileName = process.argv[2];

var exten = "." + process.argv[3];
 

fs.readdir(fileName, function  (err, list) {
if(err)
{
	console.log(err)
} 
else
{
for (var i = 0; i < list.length; i++) {
 
if (path.extname(list[i]) === exten) {
console.log(list[i]);
}
}
}
});


