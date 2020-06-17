import React from "react";
import "./button.styles.scss";

const CustomButton = ({ children, className, ...otherProps }) => (
	<button
		className={["custom-button", className].join(" ")}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
