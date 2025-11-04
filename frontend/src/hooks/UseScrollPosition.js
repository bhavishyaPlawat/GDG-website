import { useEffect, useState } from 'react'
export default function useScrollPosition(){
  const [pos, setPos] = useState(window.scrollY || 0)
  useEffect(()=> {
    const onScroll = ()=> setPos(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])
  return pos
}
