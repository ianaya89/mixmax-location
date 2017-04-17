module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var width = data.width > 600 ? 600 : data.width;
  var html = data.src;
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};
