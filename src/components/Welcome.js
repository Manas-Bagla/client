import React from 'react'

const Welcome = () => {
  return (
    <div className="flex bg-gray-100">
    <div className="pl-[11%] pt-[10%]">

      <div className="font-pop">
        <h1 className="text-[24px]">Welcome to</h1>
        <h1 className="text-[24px] text-[#2ACD30] font-mont">Gujrat Pesticides Company Pvt.Ltd.</h1>
        <div className="w-[74px] h-[10px] bg-[#8EB004]" ></div>
        <div className="bg-black w-[421px] h-[5px]"></div>
      </div>
      <p className="font-pop text-[18px] pt-[5%]">The products of the company increase the yield of agriculture and also protect the land and environment. We are pleased to introduce ourselves as the leading and unmatched manufacturer of Insecticides, Herbicides, Weedicides, Fungicides, Bio-Fertilizers, Micro-Nutrients and various Plant Growth Regulators.</p>
      <p className="font-pop text-[18px] pt-[10%]">Established in 1991 as a trader of agro chemicals, we came into manufacturing in 2016 having aside a passion for quality control.Guided by the motto of “Super Quality, Super Farms” We are establishing ourselves as a well-known manufacturer, supplier, trader, wholesaler and buyer company.</p>
      <button class="bg-[#8EB004] text-xl mt-10  text-black font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
  Explore 
</button>
    </div>
     <div className="pl-[11%] pt-[15%] pr-[11%]">
      <img className="h-[80%]" src="/images/tractor.jpg"/>
     </div>
    </div>
  )
}

export default Welcome
