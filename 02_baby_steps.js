var args = process.argv.slice(2);
var total = 0;

for (var i = 0; i < args.length; i++){
  total += Number(args[i]);
}

console.log(total);
console.log(i);
