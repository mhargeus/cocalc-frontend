import React, { useState, useEffect } from "react"
import Link from "next/link"

function Navbar() {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("transparent")
  const [textColor, setTextColor] = useState("white")

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white")
        setTextColor("black")
      } else {
        setColor("transparent")
        setTextColor("white")
      }
    }
    window.addEventListener("scroll", changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top 0 w-full z-1+ ease-in duration-300'
    >
      <div className=' max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-5xl'>
            C0² Calculator
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-5 text-2xl'>
            <Link href='/Calculate'>Calculate</Link>
          </li>
          <li className='p-5 text-2xl'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
