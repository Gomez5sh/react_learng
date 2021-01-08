import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const [images, seTimagse] = useState([]);

  useEffect(() => {
    getGifs(category).then(seTimagse);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GiftGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
