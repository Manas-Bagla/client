import React from 'react'

const Card = () => {
  return (
<div className="pb-[10%]">

<div className="font-pop pl-[11%] pt-[10%]">
        <h1 className="text-[36px] font-mont">Our Products</h1>
      
        <div className="w-[74px] h-[10px] bg-[#8EB004]" ></div>
        <div className="bg-black w-[250px] h-[5px]"></div>
      </div>


    <div className="flex pl-[11%] gap-[10%] pt-[5%]">
    
      <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs bg-gray-700  cursor-pointer">
 <a href="Fungicides"><img src="/images/fung.jpg" class="h-[210px] max-w-xs hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" /></a> 
  <h1 className="pt-2 text-center text-[24px] text-white"><a href="Fungicides">Fungicides</a></h1>
</div>
      <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs bg-gray-700 cursor-pointer">
  <img src="/images/insect.jpg" class="max-w-xs hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
  <h1 className="pt-2 text-center text-[24px] text-white">Insecticides</h1>
</div>
      <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs bg-gray-700 cursor-pointer">
  <img src="/images/herb.jpg" class="max-w-xs hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
  <h1 className="pt-2 text-center text-[24px] text-white">Herbicides</h1>
</div>
    </div>
    </div>
  )
}

export default Card
