import React from 'react';
import FilhoFuncao from "./filhoFuncao";


const PaiFunction = () => {

   const handleChildClick = () => {
      console.log("O botão do componente filho foi clicado!");
   };

  return (
    <div>
     <FilhoFuncao onChildClick={handleChildClick} />
     
    </div>
  );
};

export default PaiFunction
