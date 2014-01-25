var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, listFiles);

function listFiles (error, list){
  list.forEach(function (file){
    // pop() returns the last item of an array
    var ext = file.split('.').pop();
    if (ext === extension){
      console.log(file);
    }
  });
}


// OFFICIAL SOLUTION
// var fs = require('fs')
// var regex = new RegExp('\\.' + process.argv[3] + '$')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (regex.test(file))
//       console.log(file)
//   })
// })

