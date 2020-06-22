import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	firestore,
	fetchSnapshot,
} from "../../firebase/firebase.utils";
import { updateShop } from "../../redux/shop/action";
import "./shopPage.styles.scss";
import WithSpinner from "../../Components/HOC/WithSpinner/withSpinner";
import CollectionPreview from "../../Components/CollectionPreview/collectionPreview";

// addCollectionAnItems("collections", SHOP_DATA).then(() =>
// 	console.log("done")
// );
const SingleCollection = WithSpinner(({ match, collections }) => {
	const collection = collections
		? collections[match.params.collection]
		: null;
	return collection ? (
		<CollectionPreview key={collection.id} items={collection.items}>
			<div className="collection">
				<h1>{collection.routeName}</h1>
			</div>
		</CollectionPreview>
	) : null;
});
const Collections = WithSpinner(({ match, collections }) =>
	collections
		? Object.keys(collections).map((key) => {
				const { id, items, title, routeName } = collections[key];
				return (
					<CollectionPreview key={id} items={items.slice(0, 4)}>
						<h1 className="title">
							<Link to={`${match.path}/${routeName}`}>{title}</Link>
						</h1>
					</CollectionPreview>
				);
		  })
		: null
);
const ShopPage = ({ updateShop, collections, match }) => {
	const [isLoading, setIsLoading] = useState(null);
	useEffect(() => {
		setIsLoading(true);
		const collectionRef = firestore.collection("collections");
		let collectionRefOnSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionData = fetchSnapshot(snapshot);
				updateShop(collectionData);
				setIsLoading(false);
			}
		);
		return () => {
			collectionRefOnSnapshot();
		};
	}, [updateShop]);
	return (
		<div className="shop-page">
			<Route
				path={`${match.path}/:collection`}
				render={(props) => (
					<SingleCollection
						isLoading={isLoading}
						collections={collections}
						{...props}
					></SingleCollection>
				)}
			/>
			<Route
				exact
				path={`${match.path}`}
				render={(props) => (
					<Collections
						isLoading={isLoading}
						collections={collections}
						{...props}
					></Collections>
				)}
			/>
		</div>
	);
};
export default connect(
	(state) => ({
		collections: state.shop.collections,
	}),
	(dispatch) => ({
		updateShop: (collections) => dispatch(updateShop(collections)),
	})
)(ShopPage);
