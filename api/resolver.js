module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var width = data.width > 600 ? 600 : data.width;
  var html = data.src;
  res.json({
    body: `<div> <h1>Current Location</h1> ${html} </div>`
  });
};
