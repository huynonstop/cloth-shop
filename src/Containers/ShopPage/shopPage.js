import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchShop } from "../../redux/shop/action";
import "./shopPage.styles.scss";
import WithSpinner from "../../Components/HOC/WithSpinner/withSpinner";
import CollectionPreview from "../../Components/CollectionPreview/collectionPreview";

const connectWithSpinner = compose(
	connect((state) => ({
		collections: state.shop.collections,
		isLoading: state.shop.fetching,
	})),
	WithSpinner
);
const Collection = connectWithSpinner(({ match, collections }) => {
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
const Collections = connectWithSpinner(({ match, collections }) =>
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
const ShopPage = ({ fetchShop, match }) => {
	useEffect(() => {
		fetchShop();
	}, [fetchShop]);
	return (
		<div className="shop-page">
			<Route
				path={`${match.path}/:collection`}
				component={Collection}
				// render={(props) => <Collection {...props}></Collection>}
			/>
			<Route
				exact
				path={`${match.path}`}
				component={Collections}
				// render={(props) => <Collections {...props}></Collections>}
			/>
		</div>
	);
};
export default connect(null, (dispatch) => ({
	fetchShop: () => dispatch(fetchShop()),
}))(ShopPage);
