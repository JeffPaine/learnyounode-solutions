var fs = require('fs');

var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename);
var fileString = fileBuffer.toString();

console.log(fileString.split('\n').length);

// OFFICIAL SOLUTION
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length
