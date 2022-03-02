import "./topbar.css";
import { Search, Chat, Person, Notifications } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Topbar = () => {
  const history = useHistory();

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
          <span>Home Page</span>
          <span>Timeline</span>
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

      <img
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : "assets/person/noprofile.jpg"
        }
        alt=""
        className="topBarImg"
      />
    </div>
  );
};

export default Topbar;
