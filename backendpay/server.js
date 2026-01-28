const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

/* ================== CORS (PROD READY) ================== */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ================== ICICI PRODUCTION CONFIG ================== */
const ICICI_INITIATE_URL = "https://pgpay.icicibank.com/pg/api/v2/initiateSale";
const PORT = process.env.PORT || 8000;
const MERCHANT_ID = process.env.MERCHANT_ID;
const AGGREGATOR_ID = process.env.AGGREGATOR_ID;
const SECRET_KEY = process.env.SECRET_KEY;

const RETURN_URL = process.env.RETURN_URL;

/* ================== UTILS ================== */

// YYYYMMDDHHMMSS
function getTxnDate() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return (
    d.getFullYear() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
  );
}

// Sort keys & concatenate VALUES ONLY
function generatePlainHashText(data) {
  return Object.keys(data)
    .sort()
    .map((k) => (data[k] !== null && data[k] !== "" ? data[k] : ""))
    .join("");
}

function generateSecureHash(plainText) {
  return crypto
    .createHmac("sha256", SECRET_KEY)
    .update(plainText)
    .digest("hex");
}


/* ================== CREATE PAYMENT ================== */
app.post("/api/icici/create-payment", async (req, res) => {
  try {
    const { name, mobile, amount } = req.body;

    if (!name || !mobile || !amount) {
      return res.status(400).json({
        success: false,
        message: "name, mobile, amount required"
      });
    }

    const payload = {
      merchantId: MERCHANT_ID,
      aggregatorID: AGGREGATOR_ID,
      merchantTxnNo: "TXN" + Date.now(),
      amount: Number(amount).toFixed(2),
      currencyCode: "356",
      payType: "0",
      customerEmailID: "promozionebranding@gmail.com",
      customerMobileNo: String(mobile),
      customerName: String(name),
      transactionType: "SALE",
      txnDate: getTxnDate(),
      returnURL: RETURN_URL,
      addlParam1: "NA",
      addlParam2: "NA"
    };

    // HASH
    const plainText = generatePlainHashText(payload);
    payload.secureHash = generateSecureHash(plainText);

    const response = await axios.post(ICICI_INITIATE_URL, payload, {
      headers: { "Content-Type": "application/json" }
    });

    const data = response.data;

    if (data.responseCode === "R1000") {
      return res.json({
        success: true,
        paymentUrl: `${data.redirectURI}?tranCtx=${data.tranCtx}`,
        merchantTxnNo: payload.merchantTxnNo
      });
    }

    return res.status(400).json({
      success: false,
      iciciResponse: data
    });

  } catch (error) {
    console.error("ICICI ERROR:", error?.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Payment initiation failed"
    });
  }
});

/* ================== PAYMENT RESPONSE ================== */
app.post("/api/icici/payment-response", (req, res) => {
  const responseData = { ...req.body };

  const receivedHash = responseData.secureHash;
  delete responseData.secureHash;

  const plainText = generatePlainHashText(responseData);
  const calculatedHash = generateSecureHash(plainText);

  if (receivedHash === calculatedHash) {
    console.log("✅ PAYMENT VERIFIED", responseData);

    // redirect to frontend success page
    return res.redirect(
      `https://promozionebranding.com/payment-success?txn=${responseData.merchantTxnNo}`
    );
  }

  console.log("❌ HASH MISMATCH");
  return res.status(400).send("Invalid payment response");
});

/* ================== START SERVER ================== */
app.listen(PORT, () => {
  console.log("✅ ICICI PG LIVE SERVER RUNNING ON PORT 8000");
});
