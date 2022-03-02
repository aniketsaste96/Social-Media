import React from "react";

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="righbarfriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="righbarProfileImg"
            src={PF + user.profilePicture}
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
