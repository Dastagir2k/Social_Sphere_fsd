import "./leftbar.scss";
import friend from "../../assets/1.png"
import Groups from "../../assets/2.png"
import market from "../../assets/3.png"
import watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Event from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import messaages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"
import { useNavigate } from "react-router-dom";
const Leftbar = () => {
  const naviagte=useNavigate();
  const navToGame=()=>{
    naviagte("/game");
  }
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Dastgair</span>
          </div>
          <div className="item">
            <img src={friend} alt="" />
            <span>Friends</span>
          </div>
          <div className="item" onClick={navToGame}>
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Event} alt="" />
            <span>Events</span>
          </div>
          <div className="item" onClick={navToGame}>
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messaages} alt="" />
            <span>messaages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messaages} alt="" />
            <span>messaages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
