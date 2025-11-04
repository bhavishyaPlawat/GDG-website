import React, { useState } from 'react'
export default function EventForm({ onCancel, onSubmit }){
  const [name,setName]=useState(''), [details,setDetails]=useState(''), [price,setPrice]=useState(0), [date,setDate]=useState(''), [venue,setVenue]=useState('')
  const submit = e => { e.preventDefault(); if(!name||!date||!venue){ alert('Please fill required'); return } onSubmit({ name, details, price, date, venue }) }
  return (
    <form onSubmit={submit} className="space-y-3">
      <div><label className="text-sm">Name</label><input value={name} onChange={e=>setName(e.target.value)} className="w-full border px-3 py-2 rounded bg-transparent" /></div>
      <div><label className="text-sm">Details</label><textarea value={details} onChange={e=>setDetails(e.target.value)} rows={4} className="w-full border px-3 py-2 rounded bg-transparent" /></div>
      <div className="grid grid-cols-2 gap-3"><div><label>Price</label><input value={price} onChange={e=>setPrice(e.target.value)} type="number" className="w-full border px-3 py-2 rounded bg-transparent" /></div><div><label>Date</label><input value={date} onChange={e=>setDate(e.target.value)} type="date" className="w-full border px-3 py-2 rounded bg-transparent" /></div></div>
      <div><label>Venue</label><input value={venue} onChange={e=>setVenue(e.target.value)} className="w-full border px-3 py-2 rounded bg-transparent" /></div>
      <div className="flex justify-end gap-2"><button type="button" onClick={onCancel} className="px-3 py-2">Cancel</button><button type="submit" className="px-4 py-2 bg-gdsc-blue text-white rounded">Upload</button></div>
    </form>
  )
}
