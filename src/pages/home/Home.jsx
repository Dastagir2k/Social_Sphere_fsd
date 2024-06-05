import AddPost from "../../components/addpost/AddPost"
import Posts from "../../components/posts/Posts"
import Stories from "../../components/stories/Stories"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <AddPost/>
      <Posts/>
    </div>
  )
}

export default Home