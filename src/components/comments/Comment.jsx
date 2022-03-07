import React, { useState } from "react";
import "./comments.css";
const [comments, setComments] = useState(false);
const [iscomments, setIsComments] = useState();
const Comment = () => {
  //comments
  const commentHandler = () => {
    setComments(true);
    setComments(!comments);
  };

  //comment to data base
  const sendCommentHandle = () => {
    try {
      axios.put(
        "/posts/" + post._id + "/comments",
        { userId: user._id },
        iscomments
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="commentBox">
        <div className="commentBoxWrapper">
          <div className="actualComment">
            <img
              className="UserCommentImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu7B79KjMjVI4_iIOLgvuVQiN-bh3z1dV8g&usqp=CAU"
              alt=""
            />
            <span>Prasad</span>
          </div>
          <span
            className="UserComment"
            onChange={(e) => setIsComments(e.target.value)}
          >
            {" "}
            👍 Nice picture
          </span>
        </div>
      </div>
      <div className="NewCommentBox">
        <textarea
          placeholder="Comment..."
          className="newCommentBoxArea"
        ></textarea>
        <button className="commentButton" onClick={sendCommentHandle}>
          Send
        </button>
      </div>
    </>
  );
};

export default Comment;
