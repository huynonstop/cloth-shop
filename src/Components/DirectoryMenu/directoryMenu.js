import React from "react";
import "./directoryMenu.styles.scss";
import MenuItem from "./MenuItem/menuItem";

const directoryMenu = ({ collections }) => {
	const keysMap = collections ? Object.keys(collections) : null;
	return keysMap ? (
		<div className="directory-menu">
			{keysMap.length &&
				keysMap.map((key) => (
					<MenuItem key={collections[key].id} {...collections[key]} />
				))}
		</div>
	) : null;
};

export default directoryMenu;
