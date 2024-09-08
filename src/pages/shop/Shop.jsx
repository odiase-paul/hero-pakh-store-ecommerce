import Hero from "../../components/hero/hero";
import NewCollections from "../../components/newCollections/newCollections";

import Offers from "../../components/offers/offers";
import Popular from "../../components/popular/popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
