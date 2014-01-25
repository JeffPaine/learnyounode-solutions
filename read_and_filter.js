var fs = require('fs');


function readAndFilter (directory, extension, callback){
  fs.readdir(directory, function (error, list){
    if (error){
      return callback(error);
    }

    var regex = new RegExp('\\.' + extension + '$');
    list = list.filter(function (file){
      return regex.test(file);
    });
    callback(null, list);
  });
}

module.exports = readAndFilter;
