const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run We Have done that task will do again for learning')
  })
  .listen(PORT, () => console.log('Listening on', PORT))
