function login(req, res) {
  console.log(req.body);

  res.json({
    success: true,
    message: "Login request received",
  });
}

module.exports = {
  login,
};