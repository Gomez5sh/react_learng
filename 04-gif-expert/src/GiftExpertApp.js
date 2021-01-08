import React, { useState } from "react";
import { GiftGrid } from "./components/GiftGrid";
import { AddCategory } from "./components/AddCategory";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <h2 className="title animate__animated animate__bounce">
        Gif Search Engine
      </h2>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
}
