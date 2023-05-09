import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0; 
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const handleNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const handleTarget = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const renderedDot = slides.map((slide, slideIndex) => {
    return (
      <div key={slideIndex} className='justify-center py-2 text-2xl'>
        <RxDotFilled onClick={() => handleTarget(slideIndex)}/>
      </div>
    )
  })
  
  return(
    <div className='max-w-[1440px] h-[550px] w-full mx-auto py-16 px-4 relative group '>
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})`}} 
        className='w-full h-full duration-500 bg-center bg-cover rounded-2xl'></div>
      {/* LeftArrow */}
      <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft  size={30} onClick={handlePrev}/>
      </div>
      {/* RightArrow */}
      <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={30} onClick={handleNext}/>
      </div>
      <div className='flex justify-center py-2 top-4'>
        {renderedDot}
      </div>
    </div>
  )
}

export default Hero