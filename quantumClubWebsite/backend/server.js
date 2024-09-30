const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "Data received", data: { name, email } });
  console.log(name, email);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
