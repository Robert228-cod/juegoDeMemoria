
export const Temporizador = ({tiempoMin, tiempoSeg, movimientos}) => {
  return (
    <div className='estadisticas'>
        <h2>tiempo: {tiempoMin < 10 && 0}{ tiempoMin }:{tiempoSeg < 10 && 0}{ tiempoSeg }</h2>
        <h2>Movimientos: { movimientos }</h2>
    </div>
  )
}
