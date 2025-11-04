 import React from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '../../utils/helpers'

export default function EventCard({ e, onOpen, onDelete }){
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="bg-white dark:bg-gdsc-surface rounded-lg p-4 card-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{e.name} {e.active && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</span>}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{formatDate(e.date)} • {e.venue}</div>
        </div>
        <div className="text-right">
          <div className="font-medium">{e.price===0 ? 'Free' : `₹ ${e.price}`}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{new Date(e.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-200 mt-3 line-clamp-3">{e.details}</p>
      <div className="mt-3 flex items-center gap-2">
        {onOpen && <button onClick={()=>onOpen(e)} className="text-sm text-gdsc-blue">View</button>}
        {onDelete && <button onClick={()=>onDelete(e.id)} className="ml-auto text-sm text-red-600">Delete</button>}
      </div>
    </motion.div>
  )
}
