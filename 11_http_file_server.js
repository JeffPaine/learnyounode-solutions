var http = require('http');
var fs = require('fs');

var file = process.argv[2];

// The `fs` core module also has some streaming APIs for files. You will
// need to use the `fs.createReadStream()` method to create a stream
// representing the file you are given as a command-line argument. The
// method returns a stream object which you can use `src.pipe(dst)` to
// pipe the data from the `src` stream to the `dst` stream. In this way
// you can connect a filesystem stream with an HTTP response stream.
var server = http.createServer(function (req, res){
  fs.createReadStream(file).pipe(res);
});
server.listen(8000);
