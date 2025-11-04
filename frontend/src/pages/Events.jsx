import React, { useMemo, useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import { useEvents } from '../context/EventContext'
import { useAdmin } from '../context/AdminContext'
import EventCard from '../components/events/EventCard'
import EventForm from '../components/events/EventForm'
import EventModal from '../components/events/EventModal'

export default function Events(){
  const { events, addEvent, deleteEvent } = useEvents()
  const { isAdmin } = useAdmin()
  const [query,setQuery] = useState('')
  const [filter,setFilter] = useState('all')
  const [openForm,setOpenForm] = useState(false)
  const [selected,setSelected] = useState(null)

  const filtered = useMemo(()=> {
    const now = new Date()
    return events.filter(e => {
      if(query && !`${e.name} ${e.details}`.toLowerCase().includes(query.toLowerCase())) return false
      if(filter==='upcoming') return new Date(e.date) >= now
      if(filter==='past') return new Date(e.date) < now
      if(filter==='free') return Number(e.price) === 0
      return true
    })
  }, [events, query, filter])

  return (
    <PageWrapper>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <div className="flex gap-3 items-center">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search events..." className="border px-3 py-2 rounded bg-transparent" />
          <select value={filter} onChange={e=>setFilter(e.target.value)} className="border px-3 py-2 rounded bg-transparent">
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="free">Free</option>
          </select>
          {isAdmin && <button onClick={()=>setOpenForm(true)} className="px-3 py-2 bg-gdsc-blue text-white rounded">Add Event</button>}
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {filtered.length===0 ? <div className="text-gray-600">No events found.</div> : filtered.map(e=> <EventCard key={e.id} e={e} onOpen={setSelected} onDelete={isAdmin?deleteEvent:null} />)}
      </div>

      {openForm && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white dark:bg-gdsc-surface rounded p-6 w-full max-w-2xl">
          <h3 className="text-lg font-semibold">Add Event</h3>
          <EventForm onCancel={()=>setOpenForm(false)} onSubmit={(p)=>{ addEvent(p); setOpenForm(false) }} />
        </div>
      </div>}

      <EventModal event={selected} onClose={()=>setSelected(null)} />
    </PageWrapper>
  )
}
