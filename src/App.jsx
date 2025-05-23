import { useState } from 'react'
import { useTimer } from './hooks/useTimer'
import { Tablero } from './componets/tablero'
import './styles/mainStyles.css'
import './App.css'

const cuadros = [
  1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8
]


function App() {
  
  const [nuevoTablero, setNuevoTablero] = useState()

  const [movimientos, setMovimientos] = useState(0)
  
  const {setTimer , tiempoMin, tiempoSeg, timer} = useTimer(0) 

  return (
    <div className='game'>
      <header>
        <h1> Juego de memoria </h1>
        <hr />
      </header>

      <main>
        <div className='estadisticas'>
          <h2>tiempo: {tiempoMin < 10 && 0}{ tiempoMin }:{tiempoSeg < 10 && 0}{ tiempoSeg }</h2>
          <h2>Movimientos: { movimientos }</h2>
        </div>
        <Tablero 
          cuadros={cuadros}
          nuevoTablero={nuevoTablero}
          timer={timer}
          setNuevoTablero={setNuevoTablero}
          setTimer={setTimer}
          movimientos={movimientos}
          setMovimientos={setMovimientos}
        />
      </main>

      <footer>
        version 1.0.0
      </footer>
    </div>
  )
}

export default App
