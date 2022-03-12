import React from "react";
import './collections-overview.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);
const mapStateTpProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateTpProps)(CollectionsOverview);