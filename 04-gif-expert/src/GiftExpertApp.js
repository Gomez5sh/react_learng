import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([
    "Code Geas",
    "Death Note",
    "One Piece",
  ]);

  /*const handleApp = () => {
    setcategories([...categories, "HunterXHunter"]);
  };*/

  return (
    <div>
      <h2>Git Expert App</h2>
      <AddCategory setCategori={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
}
