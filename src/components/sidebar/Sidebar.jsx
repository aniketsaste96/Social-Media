import "./sidebar.css";
import CloseFriends from "../closeFriends/CloseFriends";
import {
  RssFeed,
  Chat,
  WorkOutline,
  PlayCircleOutlineOutlined,
  Group,
  HelpOutline,
  School,
  Event,
} from "@material-ui/icons";
import { Users } from "../../DummyData";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="listItems">
            <RssFeed className="sideBarIcon" />
            <span className="sidebarIcons">Feed</span>
          </li>
          <li className="listItems">
            <Chat className="sideBarIcon" />
            <span className="sidebarIcons">Chat</span>
          </li>
          <li className="listItems">
            <Group className="sideBarIcon" />
            <span className="sidebarIcons">Groups</span>
          </li>
          <li className="listItems">
            <PlayCircleOutlineOutlined className="sideBarIcon" />
            <span className="sidebarIcons">Videos</span>
          </li>
          <li className="listItems">
            <WorkOutline className="sideBarIcon" />

            <span className="sidebarIcons">Work</span>
          </li>
          <li className="listItems">
            <HelpOutline className="sideBarIcon" />
            <span className="sidebarIcons">Help</span>
          </li>
          <li className="listItems">
            <School className="sideBarIcon" />
            <span className="sidebarIcons">School</span>
          </li>
          <li className="listItems">
            <Event className="sideBarIcon" />
            <span className="sidebarIcons">Event</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHR" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
