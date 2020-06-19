import React from "react";
import { connect } from "react-redux";
import "./collectionItem.styles.scss";
import { addItemToCart } from "../../redux/cart/action";
import CustomButton from "../Custom/Button/button";
const CollectionItem = ({ id, item, addItemToCart }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton
				className="inverted"
				onClick={() => {
					addItemToCart(item);
				}}
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default connect(null, (dispatch) => ({
	addItemToCart: (item) => dispatch(addItemToCart(item)),
}))(CollectionItem);
