import React,{useState} from 'react'
 import {AiOutlineDown , AiOutlineShoppingCart} from "react-icons/ai"
//  import { useNavigate } from 'react-router-dom';


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


//   const navigate = useNavigate()
//  const Nav = (event) =>{
//   const value = event.target.value
//      if(value === "Fungicides"){
//       console.log(value);
//       navigate("/Fungicides")
//      }
//  }
  return (
    
    <div className={`${color ? "background-change": "background"} flex lg:justify-between pl-[11%] pr-[11%] pt-5 pb-5  fixed lg:w-full top-0   bg-clip-padding blur-backdrop-filter ` }>
         <div>
         <ul className="flex  content-start lg:gap-4 text-[20px] pt-1" >
                <img src="/images/logo.png" className="w-[100px]"/>
             </ul>
         </div>
     
         <div className="">
         <ul className="flex gap-[25px]  text-[20px] pt-4">
                 <li><a href="/" className="font-pop text-black hover:text-green-400">Home</a></li>
                 <li><a href="About" className="font-pop text-black hover:text-green-400">About Us</a></li>
               {/* <li><a href="#" className="font-poppins text-black hover:text-green-400">Products</a></li> */}
               {/* <label for="cars">Products</label> */}
  {/* <select name="Products" id="Products" onChange={Nav} className="bg-transparent border-none">
    <option >Products</option>
    <option  value="Fungicides">Fungicides</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select> */}
  

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