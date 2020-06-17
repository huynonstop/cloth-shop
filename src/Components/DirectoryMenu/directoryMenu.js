import React from "react";
import "./directoryMenu.styles.scss";
import MenuItem from "./MenuItem/menuItem";

const directoryMenu = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections &&
				sections.map(({ id, ...restProps }) => (
					<MenuItem key={id} {...restProps} />
				))}
		</div>
	);
};

export default directoryMenu;
