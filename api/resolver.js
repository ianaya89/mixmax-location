const config = require('../config')

module.exports = (req, res) => {
  const data = JSON.parse(req.body.params)
  if (!data) { return res.status(403).send('Invalid params') }

  const API_KEY = config.apiKey

  res.json({
    // body: `
    //   <iframe src="https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${data.q}" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    // `
    body: `
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=${data.q}&size=300x225&maptype=roadmap&markers=${data.q}&zoom=13&key=${API_KEY}" />
    <br>
    <a href="https://mixmax-location.herokuapp.com?q=${data.q}">Live Map View</a>
    `
  })
}
