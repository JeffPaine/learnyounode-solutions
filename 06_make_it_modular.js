var readAndFilter = require('./read_and_filter');

var directory = process.argv[2];
var extension = process.argv[3];

readAndFilter(directory, extension, function (error, files){
  if (error){
    return console.error('There was an error:', error);
  }

  files.forEach(function (file){
    console.log(file);
  });
});
