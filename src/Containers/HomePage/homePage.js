import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchShop } from "../../redux/shop/action";
import "./homePage.styles.scss";
import WithSpinner from "../../Components/HOC/WithSpinner/withSpinner";
import DirectoryMenu from "../../Components/DirectoryMenu/directoryMenu";

const DirectoryMenuWithSpinner = WithSpinner(DirectoryMenu);
const HomePage = ({ fetchShop, collections, isLoading }) => {
	useEffect(() => {
		fetchShop();
	}, [fetchShop]);
	return (
		<div className="home-page">
			<DirectoryMenuWithSpinner
				isLoading={isLoading}
				collections={collections}
			/>
		</div>
	);
};

export default connect(
	(state) => ({
		collections: state.shop.collections,
		isLoading: state.shop.fetching,
	}),
	(dispatch) => ({
		fetchShop: () => dispatch(fetchShop()),
	})
)(HomePage);
