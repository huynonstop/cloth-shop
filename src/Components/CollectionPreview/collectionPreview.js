import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/collectionItem";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.map(({ id, ...otherProps }) => (
					<CollectionItem key={id} {...otherProps} />
				))}
			</div>
		</div>
	);
};

export default CollectionPreview;
