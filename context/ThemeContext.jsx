'use client'
import React, { useEffect } from 'react'
import { createContext, useState } from "react"

export const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('')

    useEffect(()=>{
        const saved = localStorage.getItem('mode')
        if(saved){
            setMode(saved)
        }
    },[mode])

    const toggleTheme = () =>{
        setMode(prevMode => {
            const newMode = prevMode==='dark'?'light':'dark'
            localStorage.setItem('mode', newMode)
            }
        )
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme}}>
            <div className={`theme ${mode}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider