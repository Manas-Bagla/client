import React from 'react'
import CountUp from 'react-countup';


const connections = () => {
  return (
    <div>
    <div className="font-pop pl-[11%] pt-[5%]">
        <h1 className="text-[36px] font-mont">Connections</h1>
      
        <div className="w-[74px] h-[10px] bg-[#8EB004]" ></div>
        <div className="bg-black lg:w-[250px] h-[5px]"></div>
      </div>

      <div className="pt-[5%] bg-con bg-no-repeat  bg-cover pb-[5%]">
       {/* <img src="images/connectionss.png" className="mx-auto w-full"/> */}
       <div className="lg:flex lg:gap-[16%] lg:pl-[11%] lg:pt-[25%] lg:text-[40px] pl-[40%] pt-[40%] font-mont font-bold text-[#1D1F0F]">
        <div><h1>Years Of Experience</h1>
        <div className="bg-[#E2CE18] lg:w-[400px] w-[70px] h-[2px]"></div>

        <CountUp delay={5}   duration={5}
 end={20}/>+
 </div>
        <div><h1>Products</h1>
        <div className="bg-[#E2CE18] lg:w-[180px] w-[50px] h-[2px]"></div>
<CountUp delay={5}   duration={2.75}
        
 end={200}/>+</div>
        <div><h1>Pan India</h1>
        <div className="bg-[#E2CE18] lg:w-[180px] w-[50px] h-[2px]"></div>
<CountUp delay={5}   duration={5}
 end={6}/>+</div>
       </div>
      </div>
    </div>
  )
}

export default connections
