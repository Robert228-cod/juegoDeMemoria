import React, { useEffect, useState } from 'react'

export const useTimer = (initialTimer = 0) => {
    const [tiempoSeg, setTiempoSeg] = useState(initialTimer)
    const [tiempoMin, setTiempoMin] = useState(0)

    const [timer, setTimer] = useState(false)

    const iniciarCrono = () => {
        setTimer(true)
    }

    useEffect(() => {
        if(timer === false) return
        const interval = setInterval(() => {
            setTiempoSeg(tiempoSeg + 1)
            if(tiempoSeg === 59){
            setTiempoSeg(0)
            setTiempoMin(tiempoMin + 1)
            }
        }, 1000);
        
        return () => {
            clearInterval(interval)
        }
    }, [timer, tiempoSeg])
  return {
    iniciarCrono,
    tiempoSeg,
    tiempoMin,
    setTimer,
    timer
  }
}
