const config = require('../config')

module.exports = (req, res) => {
  const data = JSON.parse(req.body.params)
  if (!data) { return res.status(403).send('Invalid params') }

  const API_KEY = config.apiKey

  res.json({
    body: `
      <iframe src="https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${data.q}" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    `
  })
}
