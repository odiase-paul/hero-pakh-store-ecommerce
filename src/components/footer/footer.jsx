import "./footer.css";

import logo from "../backgroundImage/ak_logo.png";
import whatsapp from "../backgroundImage/whatsapp.png";
import ig from "../backgroundImage/ig.png";
import linkedin from "../backgroundImage/linkedin.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="logo" src={logo} alt="" />
        <p>AKH-STORES</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="icon-container">
          <img className="whatsapp" src={whatsapp} alt="" />
        </div>
        <div className="icon-container">
          <img className="ig" src={ig} alt="" />
        </div>
        <div className="icon-container">
          <img className="linkedin" src={linkedin} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ {year} - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
