var fs = require('fs');

var countLines = function (err, fileBuffer){
  // console.log(fileBuffer);
  console.log(fileBuffer.split('\n').length);
};

fs.readFile(process.argv[2], 'utf8', countLines);


// // OFFICIAL SOLUTION
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   var lines = contents.toString().split('\n').length
//   console.log(lines)
// })
