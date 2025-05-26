import React from 'react'

export const Resultados = ({minutos, segundos, movimientos}) => {
  return (
    <div>
        <h2 className='stats-text'> Juego terminado </h2>
        <h3 className='stats'>
            Tiempo: {minutos} : {segundos}
            Movimientos realizados: {movimientos}
        </h3>
    </div>
  )
}
