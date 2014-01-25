var http = require('http');

var results = [];
var urls = process.argv.slice(2);

getUrls(urls);

function getUrls(urls){
  urls.forEach(function (url, index){
    http.get(url, function (res){
      var dataResults = [];

      // Set response data to be a string
      res.setEncoding('utf8');

      // Add all data to our array
      res.on('data', function (r){
        dataResults.push(r);
      });

      // Log out data on last url
      res.on('end', function (){
        results.push(dataResults.join(''));
        if (index === process.argv.length - 3){
          results.forEach(function (result){
            console.log(result);
          });
        }
      });

    });
  });
}
