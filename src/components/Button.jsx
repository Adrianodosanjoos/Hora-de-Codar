import React from 'react'

const Button = () => {
    const handleClick = () => {
        console.log("Button clicked");
    };
  return <button onClick={handleClick}>Cliquem em mim</button>
  
};

export default Button;
