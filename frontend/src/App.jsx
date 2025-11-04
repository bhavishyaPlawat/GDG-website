import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext'
import { AdminProvider } from './context/AdminContext'
import { EventProvider } from './context/EventContext'

export default function App(){
  return (
    <ThemeProvider>
      <AdminProvider>
        <EventProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </EventProvider>
      </AdminProvider>
    </ThemeProvider>
  )
}
