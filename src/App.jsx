import "./App.css";

import { EmailList, Header, Mail, SendMail, Sidebar } from "./components";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { selectSendMessageIsOpen } from "./slices/mailSlice";
import { useSelector } from "react-redux";
const App = () => {
  const sendMessageisOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
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
    </Router>
  );
};

export default App;
