import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentFailed = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const txn = searchParams.get("txn");
  const msg = searchParams.get("msg");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{fontSize:"60px"}}>❌</div>

        <h1 style={{color:"red"}}>Payment Failed</h1>

        <p>Transaction ID: {txn}</p>
        <p>{msg}</p>

        <button style={styles.btn} onClick={() => navigate("/")}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;

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
    background:"red",
    color:"#fff",
    borderRadius:"5px",
    cursor:"pointer"
  }
};
