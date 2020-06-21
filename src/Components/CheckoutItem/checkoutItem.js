import React from "react";
import { connect } from "react-redux";
import {
	addItemToCart,
	removeOneItem,
	clearItem,
} from "../../redux/cart/action";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({
	item,
	addItemToCart,
	removeOneItem,
	clearItem,
}) => {
	const { id, name, imageUrl, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeOneItem(id)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItemToCart(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(id)}>
				&#10005;
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addItemToCart: (item) => dispatch(addItemToCart(item)),
		removeOneItem: (id) => dispatch(removeOneItem(id)),
		clearItem: (id) => dispatch(clearItem(id)),
	};
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
