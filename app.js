import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";

import customerEndpoint from "./controller/customer-controller.js";
import deviceEndpoint from "./controller/device-controller.js";
import billEndpoint from "./controller/bill-controller.js";
import transactionEndpoint from "./controller/transaction-controller.js";

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API STOCK MANAGEMENT");
});

app.use("/", customerEndpoint);
app.use("/", deviceEndpoint);
app.use("/", billEndpoint);
app.use("/", transactionEndpoint);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
