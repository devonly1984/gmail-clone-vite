import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../slices/mailSlice";

export default configureStore({
	reducer: {
		mail: mailReducer,
	},
});
