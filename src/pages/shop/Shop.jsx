import Hero from "../../components/hero/hero";
import NewCollections from "../../components/newCollections/newCollections";
import NewsLetter from "../../components/news_letter/newsLetter";

import Offers from "../../components/offers/offers";
import Popular from "../../components/popular/popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
