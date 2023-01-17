import express from 'express';

const server = express();

server.use(express.json());

server.listen(4000, () => {
  console.log('Server running...')
});

export default server;