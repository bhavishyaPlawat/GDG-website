import React, { createContext, useContext } from 'react'
import { AdminProvider } from './AdminContext'
import { EventProvider } from './EventContext'

const GlobalContext = createContext()
export function GlobalProvider({ children }){
  return (
    <AdminProvider>
      <EventProvider>{children}</EventProvider>
    </AdminProvider>
  )
}
export function useGlobal(){ return useContext(GlobalContext) }
