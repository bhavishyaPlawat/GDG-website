export default function Button({ children, onClick, className='' }){
  return <button onClick={onClick} className={`px-4 py-2 bg-gdsc-blue text-white rounded ${className}`}>{children}</button>
}
