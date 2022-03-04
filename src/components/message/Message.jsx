import React from "react";
import "./message.css";
const Message = ({ own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="http://getwallpapers.com/wallpaper/full/9/7/9/566755.jpg"
            alt=""
          />
          <p className="messageText">Hello this is message Lorem,</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
};

export default Message;
