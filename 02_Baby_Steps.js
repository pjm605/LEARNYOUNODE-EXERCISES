var args = process.argv;
var sumResult = 0;

for(var i = 2; i < args.length; i++)
{
	sumResult += Number(args[i]);
}
console.log(sumResult)