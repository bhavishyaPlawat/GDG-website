import React from 'react'
import { useEvents } from '../../context/EventContext'
import EventCard from '../events/EventCard'

export default function UpcomingEvents(){
  const { events } = useEvents()
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Upcoming Events</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {events.slice(0,6).map(e => <EventCard key={e.id} e={e} />)}
      </div>
    </div>
  )
}
