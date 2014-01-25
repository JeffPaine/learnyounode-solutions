var http = require('http');

var url = process.argv[2];

// GET our url
http.get(url, function (res){
  var data = [];

  // Set response data to be a string
  res.setEncoding('utf8');

  // Add all data to our data array
  res.on('data', function (r){
    data.push(r);
  });

  // Log the length of the received data
  // Log a concatenated version of the data
  res.on('end', function (r){
    console.log(data.join('').length);
    console.log(data.join(''));
  });

  // Log errors to the console
  res.on('error', console.error);
});

