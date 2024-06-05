import "./post.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
const Post = ({post}) => {
    const liked=false
    const [commentOpen,setCommentOpen]=useState(false);
  return (
    <div className="post">
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic}/>
                <div className="details">
                    <Link to={`/profile/${post.userid}`} style={{textDecoration:"none",color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    </Link>
                    <span className="time"> 1 min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img}/>
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
                12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
               <TextsmsOutlinedIcon/>
                12 comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
                Share
            </div>
        </div>
        {commentOpen && <Comments/> }
        </div>
    </div>
  )
}

export default Post