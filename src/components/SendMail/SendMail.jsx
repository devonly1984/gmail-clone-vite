import "./SendMail.css";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addMail,
  closeSendMessage,
  selectSendMessageIsOpen,
} from "../../redux/slices/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();
  const MessageBoxState = useSelector(selectSendMessageIsOpen);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addMail(data));
    if (MessageBoxState === "false") {
      dispatch(closeSendMessage());
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}
        <input
          type="text"
          placeholder="Message"
          className="sendMail__message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
