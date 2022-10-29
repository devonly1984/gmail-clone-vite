import "./Sidebar.css";

import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

import SidebarOptions from "./Options/SidebarOptions";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../slices/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOptions Icon={Star} title="Starred" number={54} />
      <SidebarOptions Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOptions Icon={LabelImportant} title="Important" number={54} />
      <SidebarOptions Icon={NearMe} title="Sent" number={54} />
      <SidebarOptions Icon={Note} title="Drafts" number={54} />
      <SidebarOptions Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
