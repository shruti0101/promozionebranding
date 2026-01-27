const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

// ===== ICICI UAT CREDENTIALS =====
const MERCHANT_ID = "100000000007164";
const AGGREGATOR_ID = "A100000000007164";
const SECRET_KEY = "ae85111d-7cc7-4f75-b0dd-6ebd33f8a86f";

const ICICI_INITIATE_SALE_URL =
  "https://pgpayuat.icicibank.com/tsp/pg/api/v2/initiateSale ";

// ===== TXN DATE FORMAT YYYYMMDDHHMISS =====
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

// ===== SECURE HASH (ICICI OFFICIAL SEQUENCE) =====
function generateSecureHash(payload) {
  const hashText =
    payload.addlParam1 +
    payload.addlParam2 +
    payload.amount +
    payload.currencyCode +
    payload.customerEmailID +
    payload.customerMobileNo +
    payload.customerName +
    payload.merchantId +
    payload.merchantTxnNo +
    payload.payType +
    payload.returnURL +
    payload.transactionType +
    payload.txnDate;

  const secureHash = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(hashText, "utf8")
    .digest("hex")
    .toLowerCase();

  return { hashText, secureHash };
}

// ===== CREATE PAYMENT API =====
app.post("/api/icici/create-payment", async (req, res) => {
  try {
    const { firstName, phone, amount } = req.body;

    if (!firstName || !phone || !amount) {
      return res.status(400).json({
        success: false,
        message: "firstName, phone, amount are required",
      });
    }

    const merchantTxnNo = "TXN" + Date.now();
    const txnDate = getTxnDate();
    const finalAmount = Number(amount).toFixed(2);

    // ===== REQUEST PAYLOAD =====
    const payload = {
      merchantId: MERCHANT_ID,
      aggregatorID: AGGREGATOR_ID, // sent, but NOT hashed
      merchantTxnNo: merchantTxnNo,
      amount: finalAmount,
      currencyCode: "356",
      payType: "0",
      customerEmailID: "test@gmail.com",
      transactionType: "SALE",
      returnURL: "http://localhost:3000/payment-success",
      txnDate: txnDate,
      customerMobileNo: String(phone),
      customerName: String(firstName),
      addlParam1: "000",
      addlParam2: "111",
    };

    // ===== HASH GENERATION =====
    const { hashText, secureHash } = generateSecureHash(payload);
    payload.secureHash = secureHash;

    console.log("🔐 HASH TEXT:", hashText);
    console.log("🔐 SECURE HASH:", secureHash);

    // ===== API CALL =====
    const response = await fetch(ICICI_INITIATE_SALE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("🏦 ICICI RESPONSE:", data);

    if (data?.redirectURI && data?.tranCtx) {
      return res.json({
        success: true,
        paymentUrl: `${data.redirectURI}?tranCtx=${data.tranCtx}`,
        merchantTxnNo,
      });
    }

    return res.status(400).json({
      success: false,
      message: data?.responseDescription || "ICICI initiateSale failed",
      data,
    });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ===== SERVER START =====
app.listen(5000, () => {
  console.log("✅ ICICI Backend running on http://localhost:5000");
});
