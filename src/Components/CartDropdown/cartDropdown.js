import React from "react";

import CustomButton from "../Custom/Button/button";

import "./cartDropdown.styles.scss";

const CartDropdown = ({ className }) => (
	<div className={className}>
		<div className="cart-items custom-scrollbar" />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
