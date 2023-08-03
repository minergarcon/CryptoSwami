import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row bg-white text-black justify-center gap-4 cursor-pointer'>
        <p>Home</p>
        <p>Bitroot</p>
        <p>About</p>
        <Link href="https://twitter.com/cryptoswami69" target='_blank'>
          Twitter
        </Link>
        <p>Contact me</p>
    </div>
  )
}

export default NavBar