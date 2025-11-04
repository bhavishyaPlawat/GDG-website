import React from 'react'
export default function EventModal({ event, onClose }){
  if(!event) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gdsc-surface rounded p-6 max-w-2xl w-full card-shadow">
        <div className="flex items-start justify-between"><div><h2 className="text-2xl font-semibold">{event.name}</h2><div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{event.date} • {event.venue}</div><div className="mt-4 text-gray-800 dark:text-gray-200">{event.details}</div></div><div className="text-right"><div className="text-lg font-semibold">{event.price===0?'Free':`₹ ${event.price}`}</div></div></div>
        <div className="mt-6 text-right"><button onClick={onClose} className="px-3 py-2">Close</button></div>
      </div>
    </div>
  )
}
