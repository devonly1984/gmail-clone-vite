import "./EmailList.css";

import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import EmailRow from "./Rows/EmailRow";
import Sections from "./Sections/Sections";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectEmails } from "../../redux/slices/mailSlice";
const EmailList = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.mail.status);
  const emails = useSelector(selectEmails);
  useEffect(() => {
    if (postStatus !== "succeeded") {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Sections Icon={Inbox} title="Primary" color="red" selected />
        <Sections Icon={People} title="Social" color="#1A73E8" />
        <Sections Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails &&
          emails.map((email) => (
            <EmailRow
              key={email.id}
              id={email.id}
              title={email.title}
              subject={email.subject}
              description={email.message}
              time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
            />
          ))}
      </div>
    </div>
  );
};

export default EmailList;
