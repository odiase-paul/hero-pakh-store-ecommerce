import "./hero.css";
import hero from "../../components/backgroundImage/hero-image.png";
import collection from "../backgroundImage/logo.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={collection} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          &rarr;
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-image" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
