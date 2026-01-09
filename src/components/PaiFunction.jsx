import React from 'react';
import filhoFuncao from "./filhoFuncao";

const PaiFunction = () => {

   const handleChildClick = () => {
      console.log("O botão do componente filho foi clicado!");
   };

  return (
    <div>
     <filhoFuncao onChildClick={handleChildClick} />
    </div>
  );
};

export default PaiFunction
