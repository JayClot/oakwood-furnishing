import React from "react";

import SHOP_DATA from "./shop.data.js";
import Collection from "../../components/collection/collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <Collection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
