import "./EmailRow.css";

import { Checkbox, IconButton } from "@mui/material";
import { LabelImportant, StarBorderOutlined } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, subject, description, time }) => {
	const history = useNavigate();
	return (
		<div className="emailRow" onClick={() => history("/mail")}>
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlined />
				</IconButton>
				<IconButton>
					<LabelImportant />
				</IconButton>
			</div>
			<h3 className="emailRow__title">{title}</h3>
			<div className="emailRow__message">
				<h4>
					{subject}{" "}
					<span className="emailRow__description"> - {description}</span>
				</h4>
			</div>
			<p className="emailRow__time">{time}</p>
		</div>
	);
};

export default EmailRow;
