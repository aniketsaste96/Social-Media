import "./post.css";
import { MoreVert, ThumbUpAlt, Favorite } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//using timeago.js package
import { format } from "timeago.js";

//post data comming from feed

const Post = ({ post }) => {
  const [users, setUser] = useState({});
  //LIKES(array WHICH INCLUDE userId) COMMING FROM DB
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [color, setColor] = useState("grey");

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //increse like if not liked and reduce if already liked
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
    //logic for if like make icon blue if not make it grey
    if (isliked) {
      setColor("grey");
    } else {
      setColor("#1877f2");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  console.log(users);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${users.username}`}>
              <img
                src={users.profilePicture || PF + "person/noprofile.jpg"}
                className="postPrfileImg"
                alt=""
              />
            </Link>
            <span className="postUserName">{users.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAlt
              htmlColor={color}
              className="likeIcon"
              onClick={likeHandler}
            />
            <Favorite
              htmlColor="red"
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
