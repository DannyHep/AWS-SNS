const express = require("express");
const app = express();
const {router, sns} = require("./routes");
require("dotenv").config();

const port = 3000;
app.use(express.json());
app.use("/", router);
app.get("/status", (req, res) => res.json({ status: "ok", sns: sns }));

app.listen(port, () => console.log(`SNS App listening on port ${port}!`));
