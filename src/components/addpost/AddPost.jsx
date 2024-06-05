import "./addpost.scss";
import Gallery from "../../assets/8.png"

const AddPost = () => {
  return (
    <div className="user_posts">
      <div className="user_container">
        <div className="user_profile">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="inputfile">
          <input type="text" placeholder="write caption for your post..." />
        </div>
        <div className="user_btn">
          <button>Submit</button>
        </div>
      </div>
      <div className="item">
      <input>
      {/* <img src={Gallery} /> */}
      </input>
      <h2>Gallery</h2>
      </div>
    </div>
  );
};

export default AddPost;
