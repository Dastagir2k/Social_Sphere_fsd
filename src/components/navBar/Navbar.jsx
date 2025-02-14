import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
// import {  AuthContext } from "../../context/AuthContext";
const Navbar = () => {
    const {darkMode,setDarkMode}=useContext(DarkModeContext)
    // const { currentUser } = useContext(AuthContext);
    // console.log("Userrrr",currentUser.name);

    const toggletheme=()=>{
        setDarkMode(!darkMode);
    }
  return (
    <div className="navbar">
        <div className="left">
            <Link to ="/" style={{textDecoration:"none"}} >
            <span>DastaSocial</span>
            </Link>
            <HomeOutlinedIcon/>
            <button onClick={toggletheme}>
                <DarkModeOutlinedIcon/>
            </button>
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="search..." />
            </div>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className="user">
                <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <span>Jogn </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar