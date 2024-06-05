import { useNavigate } from "react-router";
import "./login.scss";
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const [Username,setuserName]=useState("")
  const [password,setPassword]=useState("")
  const navtoReg = () => {
    navigate("/register");
  };

  const handleLogin = async(e) => {
    e.preventDefault(); // Prevent form submission default
    try {
      const response = await axios.post("http://localhost:6060/api/user/login", {
        username: Username,
        password: password,
      });
      console.log(response);
      console.log("Successfully verified from client");
      navigate('/'); // Navigate to login after successful registration
    } catch (err) {
      console.log("Error from client", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Vero sapiente quaerat tempora earum assumenda accusantium beatae mollitia aspernatur nisi quo.</p>
          <span>Don't you have an Account ?</span>
          <button onClick={navtoReg}>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e)=>setuserName(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
