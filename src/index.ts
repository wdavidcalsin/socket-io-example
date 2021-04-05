const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>SocketIO exmaple</h1>');
});

http.listen(5000, () => {
  console.log('listening on *:5000');
});
