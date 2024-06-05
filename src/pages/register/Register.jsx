import { useNavigate } from "react-router";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navToLogin = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:6060/api/user/register", {
        username: Username,
        password: password,
        email: email,
        name: name,
      });
      console.log(response);
      console.log("Successfully inserted from client");
      navigate('/login'); // Navigate to login after successful registration
    } catch (err) {
      console.log("Error from client", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Dasta Social</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Vero sapiente quaerat tempora earum assumenda accusantium beatae mollitia aspernatur nisi quo.</p>
          <span>Do you have an Account?</span>
          <button onClick={navToLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
