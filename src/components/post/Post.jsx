import "./post.css";
import React from "react";
import { MoreVert, ThumbUpAlt, Favorite } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//using timeago.js package
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
//post data comming from feed

const Post = ({ post }) => {
  const [users, setUser] = useState({});
  //LIKES(array WHICH INCLUDE userId) COMMING FROM DB
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(false);
  const [iscomments, setIsComments] = useState("");
  const [dbcomments, setDBComments] = useState("");
  const [color, setColor] = useState("grey");
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //increse like if not liked and reduce if already liked
  const likeHandler = () => {
    //SEND LIKES AND DISLIKES TO BACKEND
    try {
      axios.put("/posts/" + post._id + "/like", { userId: user._id });
    } catch (error) {}
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
    //logic for if like make icon blue if not make it grey
    if (isliked) {
      setColor("grey");
    } else {
      setColor("#1877f2");
    }
  };

  // if alreday liked by same use or not
  useEffect(() => {
    setIsLiked(post.likes.includes(user._id));
  }, [user._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  //comments
  const commentHandler = () => {
    setComments(true);
    setComments(!comments);
  };

  //get comments from database
  //now fetch comments
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get("/comments/6216244cea30e686ed61ec29");
        setDBComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [iscomments]);

  console.log(dbcomments);
  //comment to data base
  const sendCommentHandle = async (e) => {
    e.preventDefault();

    const Newcomment = {
      sender: user._id,
      text: iscomments,
      postId: post._id,
    };
    try {
      await axios.post("/comments", Newcomment);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(iscomments);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${users.username}`}>
              <img
                src={
                  users.profilePicture
                    ? PF + users.profilePicture
                    : PF + "person/noprofile.jpg"
                }
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
            <span className="postCommentText" onClick={commentHandler}>
              {post.comments} comments
            </span>
          </div>
        </div>
      </div>

      {comments === true ? (
        <>
          <div className="commentBox">
            <div className="commentBoxWrapper">
              {dbcomments.map((comment) => (
                <div className="actualComment">
                  <img
                    className="UserCommentImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu7B79KjMjVI4_iIOLgvuVQiN-bh3z1dV8g&usqp=CAU"
                    alt=""
                  />
                  <span>Prasad</span>
                  <span className="UserComment">{comment.text} </span>
                </div>
              ))}
            </div>
          </div>
          <div className="NewCommentBox">
            <textarea
              placeholder="Comment..."
              className="newCommentBoxArea"
              onChange={(e) => setIsComments(e.target.value)}
            ></textarea>
            <button className="commentButton" onClick={sendCommentHandle}>
              Send
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
