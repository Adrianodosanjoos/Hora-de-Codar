import React from 'react'

const Descricao = (props) => {
  return (
    <div>
      <p>Seu nome é : {props.nome}</p>
      <p>E você tem : {props.anos} anos de idade. </p>
    </div>
  )
}

export default Descricao;
