import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../Custom/Button/button";
import CartItem from "../CartItem/cartItem";

import "./cartDropdown.styles.scss";

const CartDropdown = ({ items, className, history }) => {
	const keys = Object.keys(items);
	return (
		<div className={className}>
			<div className="cart-items custom-scrollbar">
				{keys.length > 0 ? (
					keys.map((key) => <CartItem key={key} item={items[key]} />)
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={() => history.push("/checkout")}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(
	connect(({ cart: { items } }) => ({
		items,
	}))(CartDropdown)
);
