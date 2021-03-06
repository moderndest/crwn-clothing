import React from "react";
import "../../components/collection-preview/collection-preview.component"
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => (

    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);



export default ShopPage;