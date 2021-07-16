import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

function HotAccessories({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifestyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      {/* 2div */}
      <div>
        {music &&
          music.map((val, i) => (
            <HotItemCard
              key={val.image}
              name={val.name}
              price={val.price}
              image={val.image}
              i={i}
            />
          ))}
        {smartDevice &&
          smartDevice.map((val, i) => (
            <HotItemCard
              key={val.image}
              name={val.name}
              price={val.price}
              image={val.image}
              i={i}
            />
          ))}

        {home &&
          home.map((val, i) => (
            <HotItemCard
              key={val.image}
              name={val.name}
              price={val.price}
              image={val.image}
              i={i}
            />
          ))}
        {lifestyle &&
          lifestyle.map((val, i) => (
            <HotItemCard
              key={val.image}
              name={val.name}
              price={val.price}
              image={val.image}
              i={i}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((val, i) => (
            <HotItemCard
              key={val.image}
              name={val.name}
              price={val.price}
              image={val.image}
              i={i}
            />
          ))}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
}

export default HotAccessories;
