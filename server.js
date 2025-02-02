import http from 'http'

const server = http.createServer(async (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, World!')
})

server.listen(5000, () => {
  console.log('Server running on port 5000')
})
