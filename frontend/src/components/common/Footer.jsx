import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gdsc-dark">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <div>© {new Date().getFullYear()} GDSC — G.L. Bajaj Institute of Technology and Management</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
