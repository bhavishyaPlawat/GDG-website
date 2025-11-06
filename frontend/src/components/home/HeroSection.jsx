import React from 'react'
import { Link } from 'react-router-dom'
export default function HeroSection(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h1 className="text-4xl font-bold">Google Developer Student Club</h1>
        <p className="text-gdsc-blue font-semibold mt-1">G.L. Bajaj Institute of Technology and Management</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">We help students learn, build and share. Join workshops, hackathons & projects.</p>
        <div className="mt-6 flex gap-3">
          <Link to="/events" className="px-4 py-2 bg-gdsc-blue text-white rounded">View Events</Link>
          <Link to="/team" className="px-4 py-2 border rounded">Team</Link>
        </div>
      </div>
      <div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded p-6 card-shadow">
          <h4 className="font-semibold">Upcoming Focus</h4>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Cyber Security Workshop</li>
            <li>Hackathons</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
