import React from "react"
import { ShieldCheck, ShieldOff } from "lucide-react"
import { useAdmin } from "../../context/AdminContext"

export default function AdminToggle() {
  const { isAdmin, toggleAdmin } = useAdmin()

  return (
    <button
      onClick={toggleAdmin}
      className={`p-2 rounded-full border transition-colors ${
        isAdmin
          ? "bg-green-100 border-green-300 text-green-700"
          : "bg-gray-100 border-gray-300 text-gray-700"
      }`}
      title={isAdmin ? "Admin Mode: ON" : "Admin Mode: OFF"}
    >
      {isAdmin ? <ShieldCheck size={18} /> : <ShieldOff size={18} />}
    </button>
  )
}
