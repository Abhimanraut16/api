import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
          <span className="ml-3 text-xl">Tailblocks</span>
        </div>

        <div className="md:ml-auto md:mr-auto gap-16 flex flex-wrap items-center text-base justify-center">
          <Link href={'/Home'} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">Phone</Link>

          <Link href={'/PhoneCase'} clLinkinkssNLinkinkme="mr-5 hover:text-grLinkinky-900">PhoneCase</Link>
          
          <Link href={'/Accessories'} clLinkinkssNLinkinkme="mr-5 hover:text-grLinkinky-900">Accessories</Link>
          

         

          <Link href={'/Watches'} className="mr-5 hover:text-gray-900">Watches</Link>
        </div>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        </button>
      </div>
    </header>

  )
}

export default Header