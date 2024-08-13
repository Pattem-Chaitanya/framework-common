import React from "react";

const Button = () => {
  return (
    <button
      onClick={() =>
        window.alert("you clicked a button in other repo from existing repo")
      }
    >
      Button
    </button>
  );
};

export default Button;
