import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/collectionItem";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.map((item) => (
					<CollectionItem key={item.id} id={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPreview;
