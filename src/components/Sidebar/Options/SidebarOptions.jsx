import "./SidebarOptions.css";

const SidebarOptions = ({ Icon, title, number, selected }) => {
	return (
		<div className={`sidebarOptions && ${selected && "sidebar--active"}`}>
			<Icon />
			<h3>{title}</h3>
			<p>{number}</p>
		</div>
	);
};

export default SidebarOptions;
