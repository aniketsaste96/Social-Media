import "./share.css";
import React from "react";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// onChange={(e) => e.target.files
//[0] add cz it takea all files we need just one

const Share = () => {
  const notify = () => toast("Successfully shared..!!");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  notify();
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      notify();
      setTimeout(function () {
        window.location.reload();
      }, 4000);
    } catch (err) {}
  };

  // http://localhost:8800/images/person/noprofile.jpg
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noprofile.jpg"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHR" />
        {
          //show selected file before upload(share)
          file && (
            <div className="shareImgContainer">
              <img
                src={URL.createObjectURL(file)}
                className="shareImg"
                alt=""
              />
              {/* createObjectURL allow us to create pseudo url so we can see it before upload */}
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )
        }
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accepts=".jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="#4267B2" className="shareIcon" />
              <span className="shareText">Tag</span>
            </div>
            <div className="shareOption">
              <Room color="secondary" className="shareIcon" />
              <span className="shareText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="#ffde34" />
              <span className="shareText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
      <ToastContainer className="toaster-container" />
    </div>
  );
};

export default Share;
