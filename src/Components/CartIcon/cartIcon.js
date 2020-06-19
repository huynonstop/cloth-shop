import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/action";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cartIcon.styles.scss";
import CartDropdown from "../CartDropdown/cartDropdown";

const CartIcon = ({ hidden, toggleCartDropdown }) => (
	<div className="cart-icon" onClick={toggleCartDropdown}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">100</span>
		{hidden ? null : <CartDropdown className="cart-dropdown" />}
	</div>
);
const mapStateToProps = (state) => ({
	hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
