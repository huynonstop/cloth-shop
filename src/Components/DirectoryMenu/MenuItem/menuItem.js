import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";

const menuItem = ({
	title,
	subtitle = "SHOP NOW",
	imageUrl,
	linkUrl,
	size,
	history,
	match,
}) => {
	const imageBackground = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(${imageUrl})`,
	};
	return (
		<div
			className={`menu-item ${size || ""}`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div className="item-background" style={imageBackground}></div>
			<div className="content">
				<h1 className="title"> {title} </h1>
				<span className="subtitle"> {subtitle} </span>
			</div>
		</div>
	);
};

export default withRouter(menuItem);
