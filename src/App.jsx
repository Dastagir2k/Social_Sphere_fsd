import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  json,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navBar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Rightbar from "./components/rightBar/Rightbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import "./style.scss"
import {DarkModeContext} from "./context/DarkModeContext"
import {  useEffect, useState } from "react";
import Magic_match from "./games/Magic_match/pages/Magic_match";
// import { AuthContext, AuthProvider } from "./context/AuthContext";
function App() {
  
  // dark Mode code 
  // const [darkMode,setDarkMode]=useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize state from localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  

  useEffect(() => {
    // Save darkMode state to localStorage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);



  const Layout = () => {
    console.log(darkMode,"working darkmode");
    return (
      <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
       
        {/* <AuthContext.Provider value={{currentUser,login}}> */}
      <div className={darkMode ? "dark-theme":""}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
      {/* </AuthContext.Provider> */}
   
      </DarkModeContext.Provider>
    );
  };
  const currentuser=true;
  const ProtectedRoute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/game" element={<Magic_match />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
