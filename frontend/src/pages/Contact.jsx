import PageWrapper from '../components/layout/PageWrapper'
import { useState } from 'react'
export default function Contact(){
  const [name,setName]=useState(''), [email,setEmail]=useState(''), [msg,setMsg]=useState('')
  const submit = e => { e.preventDefault(); alert('Thanks! (demo)'); setName(''); setEmail(''); setMsg('') }
  return (
    <PageWrapper>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={submit} className="mt-6 space-y-4 max-w-xl">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border px-3 py-2 rounded bg-transparent" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border px-3 py-2 rounded bg-transparent" />
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message" rows={6} className="w-full border px-3 py-2 rounded bg-transparent"></textarea>
        <div className="text-right"><button className="px-4 py-2 bg-gdsc-blue text-white rounded">Send</button></div>
      </form>
    </PageWrapper>
  )
}
