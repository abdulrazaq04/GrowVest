require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routs/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { BalanceModel } = require("./model/BalanceModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000", // Auth app
    "http://localhost:3001", // Dashboard app
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


app.use(bodyParse.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoute);


// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHoldingModel = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHoldingModel.save();
//   });
//   res.send("done");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item) => {
//     let newPositionsModel = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositionsModel.save();
//   });
//   res.send("done");
// });

// app.get("/initBalance", async(req, res) => {
//   await BalanceModel.create({ amount: 3740 });
//   res.send("Balance Added");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/balance", async (req, res) => {
  try {
    const balance = await BalanceModel.findOne();

    if (!balance) {
      return res.json({ amount: 0 });
    }

    res.json({ amount: balance.amount });
  } catch (err) {
    console.error("Balance API error:", err);
    res.status(500).json({ message: "Failed to fetch balance" });
  }
});


app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const cost = qty * price;

  const balance = await BalanceModel.findOne();

  if (balance.amount < cost) {
    return res.status(400).json({ message: "Insufficient Balance" });
  }

  balance.amount -= cost;
  await balance.save();

  try {
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + qty;
        holding.avg =
          (holding.avg * holding.qty + price * qty) / totalQty;
        holding.qty = totalQty;
        holding.price = price;
        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    }

    await OrdersModel.create({ name, qty, price, mode });

    res.json({ message: `${name} bought successfully` });

  } catch (err) {
    res.status(500).json({ message: "Buy failed" });
  }

  console.log("success");

});


app.get("/orders", async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});


app.post("/sellOrder", async (req, res) => {
  const { name, qty, price } = req.body;
  const credit = qty * price;

  try {
    const holding = await HoldingsModel.findOne({ name });

    if (!holding) {
      return res.status(400).json({
        message: "No holdings available to sell",
      });
    }

    if (qty > holding.qty) {
      return res.status(400).json({
        message: "Sell quantity exceeds available holdings",
      });
    }

    holding.qty -= qty;

    if (holding.qty === 0) {
      await holding.deleteOne();
    } else {
      holding.price = price;
      await holding.save();
    }

    await OrdersModel.create({
      name,
      qty,
      price,
      mode: "SELL",
    });

    const balance = await BalanceModel.findOne();
    balance.amount += credit;
    await balance.save();

    res.json({ message: `${name} sold successfully` });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Sell failed" });
  }
});


mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`App connected to ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed", err.message);
    process.exit(1);
  });
