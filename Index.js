const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/", (req, res) => {
  console.log("🔔 Webhook Received:");
  console.log(JSON.stringify(req.body, null, 2));

  // Respond with 200 OK
  res.status(200).send("Webhook received");
});

app.get("/", (req, res) => {
  res.send("Peach Payments Webhook Listener is active.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
