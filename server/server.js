const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = 5000;
const app = express();
app.use(cors());

const api = {
  key: "260a4af979e37b7900d2f1934cd9a3ab",
  base: "https://api.openweathermap.org/data/2.5/",
};

app.get("/weather", (req, res) => {
  const city = req.query.q;
  const url = `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`;

  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching weather data" });
    });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
