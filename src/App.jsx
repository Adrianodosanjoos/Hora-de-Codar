import './App.css'
import Welcome from './components/Welcome'
import Bomdia from './components/dia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'

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
    </>
    
  )
}

export default App
