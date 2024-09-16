import "./offers.css";
import exclusive from "../backgroundImage/secondDiv-edited.png";
import offerImage from "../../components/backgroundImage/special_offer.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>
          Exclusive <img src={offerImage} alt="" />
        </h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
