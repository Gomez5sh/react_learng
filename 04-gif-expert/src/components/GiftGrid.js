import React from "react";
import { useFechGifs } from "../hooks/useFechGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFechGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Now Loading</p>
      )}
      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => {
          return <GiftGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
