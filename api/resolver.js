module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  const API_KEY = 'AIzaSyDntOFUzsjtroqZkB_lB6IimZnYOvzgaRg'

  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  res.json({
    body: `
      <iframe src="https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${data.q}" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
    `
  });
};
