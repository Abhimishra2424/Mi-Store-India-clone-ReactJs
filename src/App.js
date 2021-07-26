import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import offer from "./data/offer";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import "./App.css";
import Footer from "./components/Footer";
import NavOptios from "./components/NavOptios";

function App() {
  return (
    <Router>
      <PreNavBar />
      <Navbar />

      <NavOptios
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />

      <Slider start={data.banner.start} />
      <Offers offers={offer} />
      <Heading text="START PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>

      <Route exact path="/smartDevices">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>

      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccessories
          lifestyle={data.hotAccessories.lifeStyle}
          lifestyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
