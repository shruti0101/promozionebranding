import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const txn = searchParams.get("txn");
  const amount = searchParams.get("amount");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{fontSize:"60px"}}>✅</div>

        <h1 style={{color:"#28a745"}}>Payment Successful</h1>

        <p>Your payment has been processed successfully.</p>

        <p><b>Transaction ID:</b> {txn}</p>
        <p><b>Amount Paid:</b> ₹ {amount}</p>

        <button style={styles.btn} onClick={() => navigate("/")}>
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

const styles = {
  container:{
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f4f6f9"
  },
  card:{
    background:"#fff",
    padding:"40px",
    borderRadius:"10px",
    textAlign:"center",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },
  btn:{
    padding:"10px 20px",
    border:"none",
    background:"#28a745",
    color:"#fff",
    borderRadius:"5px",
    cursor:"pointer"
  }
};
