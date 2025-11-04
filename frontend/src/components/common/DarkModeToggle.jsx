import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function DarkModeToggle(){
  const { theme, toggle } = useTheme()
  return (
    <button onClick={toggle} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      { theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" /> }
    </button>
  )
}
