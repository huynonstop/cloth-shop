import React from "react";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/action";
import "./checkoutPage.styles.scss";
import CheckoutItem from "../../Components/CheckoutItem/checkoutItem";
import StripeButton from "../../Components/StripeButton/stripeButton";
import CustomButton from "../../Components/Custom/Button/button";

const CheckoutPage = ({ items, clearCart }) => {
	const cartItems = Object.keys(items).map((key) => items[key]);
	const totalPrice = cartItems.reduce(
		(p, c) => (p = p + c.price * c.quantity),
		0
	);
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
			<div className="total">TOTAL: ${totalPrice}</div>
			<div className="payment-row">
				<StripeButton
					price={totalPrice}
					clearCart={clearCart}
					ComponentClass="div"
				>
					<CustomButton className="red">PAY NOW</CustomButton>
				</StripeButton>
			</div>

			<div className="payment-info">
				<h2>*Test credit card for payments*</h2>
				<h3>"4242 4242 4242 4242 - Exp: 01/21 - CW: 123"</h3>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});
const mapDispatchToProps = (dispatch) => ({
	clearCart: () => dispatch(clearCart()),
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckoutPage);
