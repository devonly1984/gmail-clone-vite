import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../../config/firebase";

const initialState = {
  sendMessageisOpen: false,
  selectedMail: null,
  status: "",
  emails: [],
};

export const fetchPosts = createAsyncThunk("mail/fetchPosts", async () => {
  const snapshot = await getDocs(collection(db, "emails"));
  const results = snapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().to,
    subject: doc.data().subject,
    message: doc.data().message,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000).toUTCString(),
  }));

  return results;
});
export const addMail = createAsyncThunk(
  "mail/addMail",
  async ({ to, subject, message }) => {
    await addDoc(collection(db, "emails"), {
      to: to,
      subject: subject,
      message: message,
      timestamp: serverTimestamp(),
    });
  }
);
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
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emails = action.payload;
      })
      .addCase(addMail.fulfilled, (state) => {
        state.sendMessageisOpen = false;
      });
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;
export const selectSendMessageIsOpen = ({ mail }) => mail.sendMessageisOpen;
export const selectOpenMail = ({ mail }) => mail.selectedMail;
export const selectEmails = ({ mail }) => mail.emails;
export const selectNumMails = ({ mail }) => 0 || mail.emails.length;
export default mailSlice.reducer;
