import "./SendMail.css";

import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const SendMail = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<Close className="sendMail__close" />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="To"
					name="to"
					{...register("to", { required: true })}
				/>
				<input
					type="text"
					placeholder="Subject"
					name="subject"
					{...register("subject", { required: true })}
				/>
				<input
					type="text"
					placeholder="Message"
					className="sendMail__message"
					name="message"
					{...register("message", { required: true })}
				/>
				<div className="sendMail__options">
					<Button
						className="sendMail__button"
						variant="contained"
						color="primary"
						type="submit">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SendMail;
