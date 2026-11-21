const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content type": "text/html" });
  res.end("<h1>hello world</h1>\n");
});

server.listen(3000, () => {
  console.log("the server is running at port 3000");
});
