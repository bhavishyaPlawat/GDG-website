import React, { createContext, useContext, useEffect, useState } from 'react'
import { uid } from '../utils/helpers'

const EventContext = createContext()
const SAMPLE = [
  { id:'e1', name:'Intro to Web Dev', details:'HTML/CSS/React basics', price:0, date:'2025-11-15', venue:'Room 204', active:true, createdAt:Date.now()-86400000 },
  { id:'e2', name:'Flutter Hack Night', details:'Build a cross-platform app', price:50, date:'2025-12-01', venue:'Auditorium', active:true, createdAt:Date.now()-3600000 }
]

export function EventProvider({ children }){
  const [events, setEvents] = useState([])
  useEffect(()=> {
    const raw = localStorage.getItem('gdsc_events')
    if(raw){ try{ setEvents(JSON.parse(raw)); return }catch{} }
    setEvents(SAMPLE)
  },[])
  useEffect(()=> localStorage.setItem('gdsc_events', JSON.stringify(events)), [events])

  const addEvent = ({ name, details, price, date, venue }) => {
    const e = { id: uid(), name, details, price: Number(price)||0, date, venue, active:true, createdAt: Date.now() }
    setEvents(prev => [e, ...prev])
  }
  const deleteEvent = (id) => setEvents(prev => prev.filter(e=>e.id !== id))
  const updateEvent = (id, patch) => setEvents(prev => prev.map(e=> e.id===id ? {...e,...patch} : e))

  return <EventContext.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>{children}</EventContext.Provider>
}
export function useEvents(){ return useContext(EventContext) }
