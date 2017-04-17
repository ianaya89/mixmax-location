const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/public'));

// So we can POST.
app.use(bodyParser.urlencoded({
  extended: true
}));

// Since Mixmax calls this API directly from the client-side, it must be whitelisted.
const corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

// The editor interface.
app.get('/editor', function(req, res) {
  res.sendFile(__dirname + '/editor.html');
});

// The in-email representation.
app.post('/api/resolver', cors(corsOptions), require('./api/resolver'));

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 8910);
} else {
  const pem = require('pem');
  const https = require('https');
  pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {
    if (err) throw err;

    https.createServer({
      key: keys.serviceKey,
      cert: keys.certificate
    }, app).listen(process.env.PORT || 8910);
  });
}
