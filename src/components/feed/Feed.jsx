import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../DummyData";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/6214dc916b92e34b7bc0b64b");
      setPost(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* dummy data using map */}
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
