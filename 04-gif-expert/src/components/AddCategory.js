import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSutmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cast) => [inputValue, ...cast]);
      setInputValue("");
    }
  };

  return (
    <div className="wrapper">
      <form className="wrapper-input" onSubmit={handleSutmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <div className="underline"></div>
        <label className="lbl-name">Text</label>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
