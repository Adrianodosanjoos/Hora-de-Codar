import './App.css'
import Welcome from './components/Welcome'
import Bomdia from './components/dia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UseInfoForm from './components/UseInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'

function App() {
 

  return (
    <>
    <Bomdia />
    <h1>Adriano</h1>
    <Welcome />
     <Pai />
     <Descricao nome = "Adriano" anos = {32}/>
     <Cachorro nome = "Thor" raca = "PitBull"/>
     <Counter />
     <UseInfoForm />
     <Button />
     <PaiFunction />
    </>
    
  )
}

export default App
