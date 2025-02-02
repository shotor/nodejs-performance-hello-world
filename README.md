# nodejs-performance-hello-world

## Usage

### NodeJS

```sh
# terminal 1
npm run server

# terminal 2
npm run test
```

### PM2

```sh
npm run pm2
npm run test
```

### Docker Nginx

```sh
# terminal 1
docker compose up -d
npm run cluster

# terminal 2
npm run test
```

## Results

| Concurrency Level | Cluster Mode (s) | Non-Cluster Mode(s) |
| ----------------- | ---------------- | ------------------- |
| 10                | 4.45             | 5.6                 |
| 100               | 4.38             | 5.4                 |
| 1000              | 4.57             | 8.8                 |
| 10000             | 4.78             | 16.5                |
