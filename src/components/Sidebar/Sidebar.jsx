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
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage, selectNumMails } from "../../redux/slices/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const NumMails = useSelector(selectNumMails);
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={Inbox}
        title="Inbox"
        number={NumMails}
        selected={true}
      />
      <SidebarOptions Icon={Star} title="Starred" number={NumMails} />
      <SidebarOptions Icon={AccessTime} title="Snoozed" number={NumMails} />
      <SidebarOptions
        Icon={LabelImportant}
        title="Important"
        number={NumMails}
      />
      <SidebarOptions Icon={NearMe} title="Sent" number={NumMails} />
      <SidebarOptions Icon={Note} title="Drafts" number={NumMails} />
      <SidebarOptions Icon={ExpandMore} title="More" number={NumMails} />
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
