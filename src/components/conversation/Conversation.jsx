import React, { useState, useEffect } from "react";
import "./conversation.css";
import axios from "axios";
const Conversation = ({ conversation, currentUser }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(currentUser);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        src={
          user?.profilePicture
            ? user.profilePicture
            : PF + "person/noprofile.jpg"
        }
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
