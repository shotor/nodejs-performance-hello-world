import { fork } from 'child_process'

const CONCURRENCY = 10
const processes = []

for (let i = 1; i <= CONCURRENCY; i++) {
  const port = 5000 + i
  const child = fork('cluster-server.js', [port], { stdio: 'inherit' })
  processes.push(child)
}

process.on('SIGINT', () => {
  processes.forEach((child) => child.kill('SIGTERM'))
  process.exit(0)
})
