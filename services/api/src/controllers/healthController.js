function healthCheck(req, res) {
  res.send("🚀 AdaptiveAI API is running...");
}

module.exports = {
  healthCheck,
};