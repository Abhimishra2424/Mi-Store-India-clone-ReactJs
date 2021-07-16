import React from "react";
import VideoCard from "./VideoCard";
import "../styles/Videos.css";

function Videos({ videos }) {
  return (
    <div className="videos">
      {videos.map((val, i) => (
        <VideoCard
          index={i}
          key={val.image}
          image={val.image}
          name={val.name}
        />
      ))}
    </div>
  );
}

export default Videos;
