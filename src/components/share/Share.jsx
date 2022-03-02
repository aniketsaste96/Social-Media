import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/person/1.jpg" alt="" />
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        <hr className="shareHR" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareText">Photo or Video</span>
            </div>
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
