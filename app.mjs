import express from "express";
const app = express();
const port = 3000;
import fetch from "node-fetch";

app.get("/fetch-api", async (req, res) => {
  try {
    const apiUrl =
      "https://www.oref.org.il/WarningMessages/History/AlertsHistory.json"; // Replace with the URL of the external API you want to fetch
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the API." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
