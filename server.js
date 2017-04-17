const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const config = require('./config')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/editor', (req, res) => res.sendFile(path.join(__dirname, '/editor.html')))
app.post('/api/resolver', cors(config.cors), require('./api/resolver'))

const msg = `🗺 ❗️ Running mixmax-location at port: ${config.port}`

if (config.env === 'production') {
  app.listen(config.port, () => console.log(msg))
} else {
  const pem = require('pem')
  const https = require('https')

  pem.createCertificate(config.pem, (err, keys) => {
    if (err) { throw err }

    https.createServer({
      key: keys.serviceKey,
      cert: keys.certificate
    }, app).listen(config.port, () => console.log(msg))
  })
}
