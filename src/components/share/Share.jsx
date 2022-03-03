import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// onChange={(e) => e.target.files
//[0] add cz it takea all files we need just one

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      //other users may alos upload file with same name so to avoid conflict
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name");
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (error) {}
  };

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
            placeholder={"What's in your mind" + " " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHR" />
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
    </div>
  );
};

export default Share;
