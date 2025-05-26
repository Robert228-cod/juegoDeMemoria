import React from 'react'

export const Tableros = ({timer, cuadros, nuevoTablero, mostrarFigura}) => {
  return (
    <section className='gameSpace'>
        {
            timer === false ?
                cuadros.map( (icon, index) => {
                    return (
                        <div className='tablero' key={index} >
                            <span className='carta' id={index} >
                                {icon}
                            </span>
                        </div>
                    )
                }) :
                nuevoTablero.map( (icon, index) => {
                    return (
                        <div className='tablero' key={index} onClick={() => mostrarFigura(index)}>
                            <span className='carta' id={index}>
                                {icon}
                            </span>
                        </div>
                    )
                })
        }
    </section>
  )
}
