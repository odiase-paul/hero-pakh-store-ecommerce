import fBeachHat from "../../assets/productImage/F beach cap.jpg";
import fBlackJack from "../../assets/productImage/F black jack.jpg";
import fBlueJacket from "../../assets/productImage/F black jack.jpg";
import fBrownCorpShoe from "../../assets/productImage/F brown-corp shoe.jpg";
import fCorpCap from "../../assets/productImage/F corp cap.jpg";
import fCorpJacket from "../../assets/productImage/F corp jacket.jpg";
import fCropJacket from "../../assets/productImage/F crop jacket.jpg";
import fFaceCap from "../../assets/productImage/F face cap.jpg";
import fOverallJacket from "../../assets/productImageF overal jacket.jpg/";
import fRedCorpShoe from "../../assets/productImage/F red corp shoe.jpg";
import fRoundCap from "../../assets/productImage/F round cap.jpg";
import fVacationCap from "../../assets/productImage/F vacation cap.jpg";
import fWhiteCorpShoe from "../../assets/productImage/F white corp shoe.jpg";
import fWhiteCorpHeels from "../../assets/productImage/F white heels.jpg";
import mBaseballJacket from "../../assets/productImage/M baseball jacket.jpg";
import mBrownJacket from "../../assets/productImage/M brown jacket.jpg";
import mDarkFaceCap from "../../assets/productImage/M dark face-cap.jpg";
import mFlatCorpShoe from "../../assets/productImage/M flat corp-shoe.jpg";
import mHighCorpShoe from "../../assets/productImage/M high corp-shoe.jpg";
import mJeanJacket from "../../assets/productImage/M jean jacket.jpg";
import mLeatherJacket from "../../assets/productImage/M leather jacket.jpg";
import mRoundCap from "../../assets/productImage/M round cap.jpg";
import mSuitjacket from "../../assets/productImage/M suit jacket.jpg";
import uBlackAndWhiteSneakers from "../../assets/productImage/U black&white-sneakers.jpg";
import uBlueSneaker from "../../assets/productImage/U blue sneakers.jpg";
import uFaceCap from "../../assets/productImage/U face cap.jpg";
import uFaceCaps from "../../assets/productImage/U face caps.jpg";
import uGreySneaker from "../../assets/productImage/U grey sneakers.jpg";
import uRedSneaker from "../../assets/productImage/U red sneakers.jpg";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      imageUrl: fBeachHat,
      new_price: 24,
      old_price: 20,
      name: "Beach Hat",
      category: "women",
    },
    {
      id: 2,
      imageUrl: fBlackJack,
      new_price: 23,
      old_price: 19,
      name: "Black Jacket",
      category: "women",
    },
    {
      id: 3,
      imageUrl: fBlueJacket,
      new_price: 28,
      old_price: 26,
      name: "Blue Jacket",
      category: "women",
    },
    {
      id: 4,
      imageUrl: fBrownCorpShoe,
      new_price: 16,
      old_price: 20,
      name: "Corporate Shoe",
      category: "women",
    },
    {
      id: 5,
      imageUrl: fCorpCap,
      new_price: 15,
      old_price: 17,
      name: "Corporate Cap",
      category: "women",
    },
    {
      id: 6,
      imageUrl: fCorpJacket,
      new_price: 24,
      old_price: 20,
      name: "Suit Jacket",
      category: "women",
    },
    {
      id: 7,
      imageUrl: fCropJacket,
      new_price: 15,
      old_price: 16,
      name: "Crop Jacket",
      category: "women",
    },
    {
      id: 8,
      imageUrl: fFaceCap,
      new_price: 10,
      old_price: 14,
      name: "Face Cap",
      category: "women",
    },
    {
      id: 9,
      imageUrl: fOverallJacket,
      new_price: 25,
      old_price: 21,
      name: "Long Jacket",
      category: "women",
    },
    {
      id: 10,
      imageUrl: fRedCorpShoe,
      new_price: 17,
      old_price: 20,
      name: "Corporate Shoe",
      category: "women",
    },
    {
      id: 11,
      imageUrl: fRoundCap,
      new_price: 19,
      old_price: 20,
      name: "Round Cap",
      category: "women",
    },
    {
      id: 12,
      imageUrl: fVacationCap,
      new_price: 14,
      old_price: 15,
      name: "Vacation Hat",
      category: "women",
    },
    {
      id: 13,
      imageUrl: fWhiteCorpShoe,
      new_price: 22,
      old_price: 21,
      name: "Corporate Shoe",
      category: "women",
    },
    {
      id: 14,
      imageUrl: fWhiteCorpHeels,
      new_price: 14,
      old_price: 15,
      name: "Heels",
      category: "women",
    },
    {
      id: 15,
      imageUrl: mBaseballJacket,
      new_price: 20,
      old_price: 16,
      name: "Jacket",
      category: "men",
    },
    {
      id: 16,
      imageUrl: mBrownJacket,
      new_price: 14,
      old_price: 24,
      name: "Jacket",
      category: "men",
    },
    {
      id: 17,
      imageUrl: mDarkFaceCap,
      new_price: 15,
      old_price: 13,
      name: "Face Cap",
      category: "men",
    },
    {
      id: 18,
      imageUrl: mFlatCorpShoe,
      new_price: 21,
      old_price: 20,
      name: "Corporate Shoe",
      category: "men",
    },
    {
      id: 19,
      imageUrl: mHighCorpShoe,
      new_price: 24,
      old_price: 20,
      name: "Corporate Shoe",
      category: "men",
    },
    {
      id: 20,
      imageUrl: mJeanJacket,
      new_price: 17,
      old_price: 19,
      name: "Jean Jacket",
      category: "men",
    },
    {
      id: 21,
      imageUrl: mLeatherJacket,
      new_price: 23,
      old_price: 20,
      name: "Leather Jacket",
      category: "men",
    },
    {
      id: 22,
      imageUrl: mRoundCap,
      new_price: 12,
      old_price: 15,
      name: "Round Cap",
      category: "men",
    },
    {
      id: 23,
      imageUrl: mSuitjacket,
      new_price: 23,
      old_price: 24,
      name: "Suit Jacket",
      category: "men",
    },
    {
      id: 24,
      imageUrl: uBlackAndWhiteSneakers,
      new_price: 18,
      old_price: 20,
      name: "Sneaker",
      category: "men",
    },

    {
      id: 25,
      imageUrl: uBlueSneaker,
      new_price: 18,
      old_price: 20,
      name: "Sneaker",
      category: `${"men"} ${"women"}`,
    },
    {
      id: 26,
      imageUrl: uFaceCap,
      new_price: 15,
      old_price: 16,
      name: "Face Cap",
      category: `${"men"} ${"women"}`,
    },
    {
      id: 27,
      imageUrl: uFaceCaps,
      new_price: 26,
      old_price: 27,
      name: "Face Cap",
      category: `${"men"} ${"women"}`,
    },
    {
      id: 28,
      imageUrl: uGreySneaker,
      new_price: 19,
      old_price: 20,
      name: "Sneaker",
      category: `${"men"} ${"women"}`,
    },
    {
      id: 29,
      imageUrl: uRedSneaker,
      new_price: 13,
      old_price: 15,
      name: "Sneaker",
      category: `${"men"} ${"women"}`,
    },
  ];
  return <div></div>;
};

export default AllProducts;
