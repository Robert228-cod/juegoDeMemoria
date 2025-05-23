import React, { useEffect, useState } from 'react'
import { Tableros } from './tableros';

export const Tablero = ({cuadros = [], nuevoTablero = [], timer, setNuevoTablero, setTimer, movimientos = 0, setMovimientos}) => {
    
    const [jugadas, setJugadas] = useState([])
    const [indices, setIndices] = useState([])
    const [contador, setContador] = useState(0)

    const mezclar = () =>{
        const copia = [...cuadros];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [copia[i], copia[j]] = [copia[j], copia[i]]; 
        }
        setNuevoTablero(copia)
        setTimer(true)
        ocultar(copia)
        }

    const ocultar = (cuadros) =>{
        for (let i = 0; i < cuadros.length; i++) {
            const element = document.getElementById(i)
            element.style.display = 'none'
        }
    }
    const mostrarFigura = (index) => {
        if(contador === 8) return
        if(jugadas.length < 2) {
            const elemento = document.getElementById(index)
            elemento.style.display = ''
            setMovimientos(movimientos+1)
            setJugadas([...jugadas,nuevoTablero[index]])
            setIndices([index,...indices])
            console.log(index)
        }
    }
    useEffect(() => {
        if(movimientos === 0) return
        const a = jugadas[0]
        const b = jugadas[1]
        if(jugadas.length === 2){
            if(a === b){
                console.log("son iguales")  
                setContador(contador + 1)
                setJugadas([]) 
                if(contador === 7){
                    console.log("juego terminado")
                    alert("Juego terminado")
                    return
                }
            }
            else{
                console.log(" no son iguales")
                const a = document.getElementById(indices[0])
                const b = document.getElementById(indices[1])
                if(jugadas.length === 2){
                    setTimeout(() => {
                        a.style.display = 'none'
                        b.style.display = 'none'
                        setJugadas([])
                    }, 1000);
                }
            }
        }
        
    }, [movimientos,jugadas])
    

  return (
    <>
        <button onClick={ mezclar }>Iniciar</button>
        <Tableros
            timer={timer}
            cuadros={cuadros}
            nuevoTablero={nuevoTablero}
            mostrarFigura={mostrarFigura}
        />
    </>
  )
}
