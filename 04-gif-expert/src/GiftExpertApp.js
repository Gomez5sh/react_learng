import React, { useState } from "react";
import { GiftGrid } from "./components/GiftGrid";
import { AddCategory } from "./components/AddCategory";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState(["One Piece"]);

  return (
    <div>
      <h2 className="title">GIF EXPERT</h2>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
}
