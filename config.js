const config = {
  port: process.env.port || 8910,
  apiKey: 'AIzaSyDntOFUzsjtroqZkB_lB6IimZnYOvzgaRg',
  env: process.env.NODE_ENV || 'test',

  cors: {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
  },

  pem: { days: 1, selfSigned: true }
}

module.exports = config
