import React, { createContext, useState, useContext } from "react"

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  const toggleAdmin = () => {
    if (!isAdmin) {
      const code = prompt("Enter Admin Passcode:")
      // ✅ Set your own passcode here
      if (code === "gdsc123") {
        setIsAdmin(true)
        alert("✅ Admin mode activated!")
      } else {
        alert("❌ Incorrect passcode!")
      }
    } else {
      if (confirm("Do you want to exit Admin mode?")) {
        setIsAdmin(false)
      }
    }
  }

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)
