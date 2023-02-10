import Link from 'next/link'
import React from 'react'

export default function Layout() {

const nav=()=>(
    <ul className='nav'>
        <li className='nav-item'><Link href={'/'} className='nav-link'>Home</Link></li>
         <li className='nav-item'><Link href={'/'} className='nav-link'>Login</Link></li>
         <li className='nav-item'><Link href={'/'} className='nav-link'>Register</Link></li>
    </ul>
)


  return (
    <div>Layout</div>
  )
}
