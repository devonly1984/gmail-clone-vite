import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sendMessageisOpen: false,
};

const mailSlice = createSlice({
	name: "mail",
	initialState,
	reducers: {
		openSendMessage: (state) => {
			state.sendMessageisOpen = true;
		},
		closeSendMessage: (state) => {
			state.sendMessageisOpen = false;
		},
	},
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = ({ mail }) => mail.sendMessageisOpen;
export default mailSlice.reducer;
