import React from 'react'
import Herbidata from '../components/Herbidata.js'
import Navbar from '../components/Navbar.js'

const Herbicides = () => {
  return (
    <div>
    <Navbar/>
    <div className="bg-crops bg-no-repeat bg-cover bg-fixed pt-[10%] pb-[5%]">
         <h1 className="text-center font-mont text-[40px]  underline text-white ">Herbicides</h1>
      </div>

<div className=" gap-5 pt-5 pl-16  grid grid-cols-4">
      {Herbidata.map(product => (
        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={product.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{product.Title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-pop">{product.description}</p>
        <a href="Contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enquiry
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

      ))}
</div>
    </div>
  )
}

export default Herbicides
