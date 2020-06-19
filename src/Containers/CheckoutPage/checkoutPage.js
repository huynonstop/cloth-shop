import React from "react";
import { connect } from "react-redux";

import "./checkoutPage.styles.scss";
import CheckoutItem from "../../Components/CheckoutItem/checkoutItem";

const CheckoutPage = ({ items }) => {
	const cartItems = Object.keys(items).map((key) => items[key]);
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem
					key={cartItem.id}
					item={cartItem}
				></CheckoutItem>
			))}
			<div className="total">
				TOTAL: $
				{cartItems.reduce(
					(p, c) => (p = p + c.price * c.quantity),
					0
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});
export default connect(mapStateToProps)(CheckoutPage);
