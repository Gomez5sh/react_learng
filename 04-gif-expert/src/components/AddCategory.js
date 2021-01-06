import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("test");
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSutmit = (e) => {
    e.preventDefault();
    setCategories((cast) => [...cast, inputValue]);
  };

  return (
    <form onSubmit={handleSutmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
