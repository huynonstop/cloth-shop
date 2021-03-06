import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./header.styles.scss";
import CartIcon from "../CartIcon/cartIcon";

const Header = ({ className, currentUser, signOut }) => (
	<div className={className}>
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<nav className="navbar">
			<Link className="nav-item" to="/shop">
				<span>SHOP</span>
			</Link>
			<Link className="nav-item" to="/contact">
				<span>CONTACT</span>
			</Link>
			{currentUser ? (
				<div className="nav-item" onClick={signOut}>
					<span>SIGNOUT</span>
				</div>
			) : (
				<Link className="nav-item" to="/auth">
					<span>SIGNIN</span>
				</Link>
			)}
		</nav>
		<CartIcon />
	</div>
);
export default connect(({ user }) => ({
	currentUser: user.currentUser,
}))(Header);
