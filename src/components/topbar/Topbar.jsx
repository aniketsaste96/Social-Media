import "./topbar.css";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Search, Chat, Person, Notifications } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
const Topbar = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  //to be sync with user logged in
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" onClick={() => history.push("/")}>
          Aniket Social
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friedns,posts,videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarRightLink">
          <span className="homepage" onClick={() => history.push("/")}>
            Home Page
          </span>
          <span onClick={() => history.push("/profile/:username")}>
            Timeline
          </span>
        </div>
      </div>
      <div className="topbarIconItem">
        <Person />
        <span className="topBarIconBadge">1</span>
      </div>
      <div className="topbarIconItem">
        <Chat />

        <span className="topBarIconBadge">2</span>
      </div>
      <div className="topbarIconItem">
        <Notifications />

        <span className="topBarIconBadge">3</span>
      </div>
      <Link to={`profile/${user.username}`}>
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : "assets/person/noprofile.jpg"
          }
          alt=""
          className="topBarImg"
        />
      </Link>

      <Tooltip title="Log Out">
        <PowerSettingsNewIcon
          className="logoutButton"
          onClick={logoutHandler}
          color="error"
        />
      </Tooltip>
    </div>
  );
};

export default Topbar;
