import "./App.css";

import { EmailList, Header, Mail, SendMail, Sidebar } from "./components";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
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
				<SendMail />
			</div>
		</Router>
	);
};

export default App;
