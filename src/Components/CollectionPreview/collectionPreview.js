import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/collectionItem";

const CollectionPreview = ({ children, items }) => {
	return (
		<>
			{children}
			<div className="collection-preview">
				<div className="preview">
					{items.map((item) => (
						<CollectionItem key={item.id} id={item.id} item={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default CollectionPreview;
