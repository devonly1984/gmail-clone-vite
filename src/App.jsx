import "./App.css";

import {
  EmailList,
  Header,
  Mail,
  SendMail,
  Sidebar,
  Login,
} from "./components";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { selectSendMessageIsOpen } from "./redux/slices/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./redux/slices/userSlice";
import { useEffect } from "react";
import { auth } from "./config/firebase";
const App = () => {
  const sendMessageisOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageisOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
};

export default App;
