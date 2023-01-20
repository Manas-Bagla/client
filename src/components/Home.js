import React,{useState,useEffect} from 'react'
import NavBar from './Navbar.js'
import Welcome from './Welcome.js';
import Card from './Card.js';
import Connections from './connections.js';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
// import Welcome from './Welcome.js';

const Home = () => {
  const slides = [
    {
      url: '/images/home.jpg',
    },
    {
      url: '/images/home.png',
    },
   

    {
      url: '/images/home4.png',
    },
  
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
        <div>
        <NavBar/>
        
        <div className='h-screen w-full  bg-fixed  group p-0 m-0 '>
        
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-fixed bg-cover duration-500'
      ></div>


       <div className="absolute top-[40%] pl-[11%] text-white font-mont">
      <h1 className="text-[48px] font-bold">Gujrat Pesticides Company</h1>
      <h1 className="text-[36px]">is manufacturing very effective</h1>
      <h1 className="text-[36px]">and <span className="text-[#2ACD30]">genuine products.</span></h1>
      <button class="bg-transparent text-xl mt-10 hover:bg-[#2ACD30] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
  Contact Us 
</button>
      </div>



      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
      <div className='flex top-4 justify-center bg-fixed py-2'> 
      
        {slides.map((slide, slideIndex) => (

          <div
          
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          
          </div>
        ))}
       
      </div>
     
    </div>
    </div>
      <Welcome/>
      <Card/>
      <Connections/>
      </div>
    
   
  )
}

export default Home
