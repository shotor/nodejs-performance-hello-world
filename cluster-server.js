import http from 'http'

const port = process.argv[2]

if (!port) {
  console.error('Error: No port provided!')
  process.exit(1)
}

const server = http.createServer(async (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Hello from server on port ${port}`)
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

process.on('SIGTERM', () => {
  server.close(() => process.exit(0))
})
