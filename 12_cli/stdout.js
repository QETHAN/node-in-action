// Connect to an HTTP URL and write the response to _debugger.start(argv, stdin, stdout)
var http = require('http'),
    url = require('url'),
    target = url.parse(process.argv[2]);

http.get(target, function (res) {
  res.pipe(process.stdout);
});
