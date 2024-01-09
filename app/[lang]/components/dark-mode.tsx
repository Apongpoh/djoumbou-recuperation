"use client"

import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function DarkModeButton() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true)}, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='mt-1 text-xl text-slate-900' onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  )
}