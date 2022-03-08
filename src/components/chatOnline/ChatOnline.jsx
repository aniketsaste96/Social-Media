import React, { useState, useEffect } from "react";
import "./chatOnline.css";
const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  // const [friends, setFriends] = useState([]);
  // const [onlinefriends, setOnlineFriends] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              src="http://getwallpapers.com/wallpaper/full/9/7/9/566755.jpg"
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlinen">akshay jadhav</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              src="http://getwallpapers.com/wallpaper/full/9/7/9/566755.jpg"
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlinen">akshay jadhav</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              src="http://getwallpapers.com/wallpaper/full/9/7/9/566755.jpg"
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlinen">akshay jadhav</span>
        </div>
      </div>
    </>
  );
};

export default ChatOnline;
