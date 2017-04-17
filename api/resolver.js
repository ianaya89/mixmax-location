module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var width = data.width > 600 ? 600 : data.width;
  var html = data.src;
  res.json({
    body:
    `
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8283.658953761378!2d-58.4772329663063!3d-34.51162809669516!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1492448798460" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    `
  });
};
