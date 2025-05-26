import { useState } from 'react'
import { useTimer } from './hooks/useTimer'
import { Tablero } from './componets/tablero'
import { Temporizador } from './componets/temporizador'
import './styles/mainStyles.css'
import './App.css'



const cuadros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

function App() {
  
  const [nuevoTablero, setNuevoTablero] = useState()

  const [movimientos, setMovimientos] = useState(0)
  
  const {setTimer , tiempoMin, tiempoSeg, setTiempoMin, setTiempoSeg, timer} = useTimer(0) 

  return (
    <div className='game'>
      <header>
        <h1 className='titulo'> Juego de memoria </h1>
        <hr />
      </header>

      <main>
        <Temporizador
          tiempoMin={tiempoMin}
          tiempoSeg={tiempoSeg}
          movimientos={movimientos}
        />
        <Tablero 
          cuadros={cuadros}
          nuevoTablero={nuevoTablero}
          timer={timer}
          setNuevoTablero={setNuevoTablero}
          setTimer={setTimer}
          movimientos={movimientos}
          setMovimientos={setMovimientos}
          settiempoSeg={setTiempoSeg}
          settimepoMin={setTiempoMin}
        />
      </main>

      <footer className='footr'>
        version 1.0.0
      </footer>
    </div>
  )
}

export default App
