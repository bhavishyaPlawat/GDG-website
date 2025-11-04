import { Link } from 'react-router-dom'
export default function NotFound(){ return (<div className="min-h-[60vh] flex items-center justify-center"><div className="text-center"><h2 className="text-3xl font-bold">Page not found</h2><p className="mt-2 text-gray-600">We couldn't find that page.</p><div className="mt-4"><Link to="/" className="text-gdsc-blue">Go home</Link></div></div></div>) }
