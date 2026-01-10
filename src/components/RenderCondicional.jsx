
const RenderCondicional = ({user}) => {

  return (
    <div>
      {user && <h1>Seja Bem-Vindo, {user}</h1>}
    </div>
  )
}

export default RenderCondicional
