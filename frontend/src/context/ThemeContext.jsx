import React, { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext()
export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(localStorage.getItem('gdsc_theme') || 'light')
  useEffect(()=> {
    if(theme==='dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('gdsc_theme', theme)
  }, [theme])
  return <ThemeContext.Provider value={{ theme, toggle:()=>setTheme(t=>t==='dark'?'light':'dark') }}>{children}</ThemeContext.Provider>
}
export function useTheme(){ return useContext(ThemeContext) }
