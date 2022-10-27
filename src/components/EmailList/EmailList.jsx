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

const EmailList = () => {
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
				<EmailRow
					title="Test"
					subject="Fellow Streamer"
					description="does this work"
					time="10pm"
				/>
				<EmailRow
					title="Test"
					subject="Fellow Streamer"
					description="does this work"
					time="10pm"
				/>
			</div>
		</div>
	);
};

export default EmailList;
