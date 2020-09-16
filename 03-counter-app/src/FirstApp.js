//FC: Funtional Compounents
import React from "react";

const FirstApp = ({ pro = "You know nothing" }) => {
  return (
    <>
      <h1>{pro}</h1>
      <p>My First App</p>
    </>
  );
};

export default FirstApp;
