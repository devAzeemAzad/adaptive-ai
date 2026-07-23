const express = require("express");
const indexRoutes = require("./routes/index.route");

const app = express();

const PORT = 5000;

app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
