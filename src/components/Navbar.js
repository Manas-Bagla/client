import React,{useState} from 'react'
 import {AiOutlineDown , AiOutlineShoppingCart} from "react-icons/ai"
//  import { useNavigate } from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx"


const Navbar = () => {
  const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 10){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll",changeColor)
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
   
    setIsActive(current => !current);
  };

  return (
    <div >
    <div className={`${color ? "background-change": "background"} flex justify-between pl-[11%] pr-[11%] pt-5 pb-5  fixed w-full top-0   bg-clip-padding blur-backdrop-filter z-20` }>
         <div>
         <ul className="flex  content-start lg:gap-4 text-[20px] pt-1 " >
              <a href="/">  <img src="/images/logo.png" className="w-[100px]"/></a>
             </ul>
         </div>
     
         <div className="">
         <ul className="hidden lg:flex gap-[25px]  text-[20px] pt-4 ">
                 <li><a href="/" className="font-pop text-black hover:text-green-400">Home</a></li>
                 <li><a href="About" className="font-pop text-black hover:text-green-400">About Us</a></li>
      

  <div className="font-pop text-[20px]">

<div class="dropdown inline-block relative">
  <button class="bg-transparent text-black   rounded inline-flex items-center">
    <span class="mr-1">Products</span>
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul class="dropdown-menu absolute hidden text-black pt-1">
    <li class=""><a class="rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Fungicides">Fungicides</a></li>
    <li class=""><a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Insecticides">Insecticides</a></li>
    <li class=""><a class="rounded-b bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Herbicides">Herbicides</a></li>
  </ul>
</div>


</div>

               <li><a href="Contact" className="font-pop text-black hover:text-green-400">Contact Us</a></li>
                
                
         </ul>
        <div >
    <button onClick={handleClick} className="lg:hidden  pt-3 pr-5 flex justify-between w-full ">
           <RxHamburgerMenu size="30" className="text-black"/>

</button>
</div>

    </div>
    </div>
    <div className={isActive ? 'visible' : "hidden"}>
<div className="text-center font-pop text-[17px] show items-center pl-[45%] pr-[45%] fixed z-9 bg-white pb-5">
  <a href="/" className="block mt-[100px] py-2 hover:text-green-400">Home</a>
  <a href="About" className="block py-2 hover:text-green-400">About</a>
  <a href="Contact"  className="block py-2 hover:text-green-400">Contact Us</a>
  
  <div class="dropdown inline-block relative">
  <button class="bg-transparent text-black   rounded inline-flex items-center">
    <span class="mr-1">Products</span>
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul class="dropdown-menu absolute hidden text-black pt-1">
    <li class=""><a class="rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Fungicides ">Fungicides</a></li>
    <li class=""><a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Insecticides">Insecticides</a></li>
    <li class=""><a class="rounded-b bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="Herbicides">Herbicides</a></li>
  </ul>
</div>


</div>
</div>


    </div>
    
    
   
  )
}

export default Navbar







 // <div className="pt-[40px] flex">
    //      <div className="relative">
    //         <ul className="flex pl-[100px] gap-[20px] content-start absolute" >
    //             <li>En</li>
    //             <input  className="bg-[#D9D9D9] text-sm" placeholder="&nbsp; Search" type="text"></input>
    //         </ul>
    //         <div className="font-mond text-[#8E793E] text-center  ml-[500px]" >
    //             <h1 className="">WATCHME</h1>
                
                
    //      </div>
    //      <div className="absolute ml-[750px] mt-[-25px] ">
    //         <ul className="flex gap-[25px] ">
    //             <li><a href="#">Register</a></li>
    //             <li><a href="#">Login</a></li>
    //             <AiOutlineShoppingCart className="mt-1"/>
                
    //         </ul>
    //      </div>
    //      </div>
        
    // </div>