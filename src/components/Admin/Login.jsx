import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const Navigate = useNavigate();
const [Email, setEmail]= useState('')
const [Password, setPassword]= useState('')
    function handleSubmit(e){
        e.preventDefault();
        Navigate('/admin')
        setEmail('')
        setPassword('')
    }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="shadow rounded p-4 bg-white">
            <div className="text-center mb-4">
              <h1 className="fw-bold text-uppercase">
                <span className="text-primary">Admin</span> Login
              </h1>
              <p className="text-muted">Enter your credentials to access the Admin Panel</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input 
                onChange={(e)=> setEmail(e.target.value) }
                value={Email}
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter email" 
                  required 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                value={Password}
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter password" 
                  required 
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-semibold">
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
