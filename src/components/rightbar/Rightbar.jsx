import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";

function Rightbar({ user }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/gift2.png" alt="" />
          <span className="birthdayText">
            <b>mahesh </b> and <b>3 others</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/ads.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {/* logic for relationship */}
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : ""}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}/person/1.jpg`}
              alt=""
              className="righbarfollowingImg"
            />
            <span className="rightbarFollowingN">Aniket Saste</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
