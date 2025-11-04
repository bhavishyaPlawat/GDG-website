import { useEffect, useState } from 'react'
export default function useDarkMode(){
  const [theme, setTheme] = useState(localStorage.getItem('gdsc_theme') || 'light')
  useEffect(()=> { document.documentElement.classList.toggle('dark', theme==='dark'); localStorage.setItem('gdsc_theme', theme) }, [theme])
  return [theme, ()=>setTheme(t=>t==='dark'?'light':'dark')]
}
