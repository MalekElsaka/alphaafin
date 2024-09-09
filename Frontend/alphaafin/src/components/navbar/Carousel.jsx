import React, { useState, useEffect } from 'react';
import carousel1 from '../../assets/carousel_1.jpg';
import carousel2 from '../../assets/carousel_2.jpg';
import carousel3 from '../../assets/carousel_3.jpg';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);
    const items = [carousel1, carousel2, carousel3];

    const handlePrev = () => {
        setTextVisible(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
            setTextVisible(true);
        }, 1000); 
    };

    const handleNext = () => {
        setTextVisible(false);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
            setTextVisible(true);
        }, 1000); 
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 6000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="controls-carousel" className="relative h-[999px] w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-full overflow-hidden ">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item h-full ${index === activeIndex ? 'fade-in zoom-out' : 'fade-out'}`}
                        data-carousel-item={index === activeIndex ? 'active' : ''}
                    >
                        <img
                            src={item}
                            className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Carousel item ${index + 1}`}
                        />
                    </div>
                ))}
                <div className={`absolute z-20 font-serif w-full font-bold top-1/2 mt-16 xl:text-[63px] text-[4.9vw] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 ${textVisible ? 'text-fade-in' : 'text-fade-out'}`}>
                    <p>
                        {'Empowering Financial Security'}
                    </p>
                    <p className='-mt-2'>
                        {'for Everyone'}
                    </p>
                    <div className="absolute font-sans w-full tracking-wide mt-16 xl:text-[20px] text-[1.4vw] font-light left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4">
                        <p>
                            We are committed to providing accessible and reliable financial services to help individuals and families.
                        </p>
                    </div>
                </div>
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                data-carousel-prev
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black opacity-60 hover:opacity-100 focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                data-carousel-next
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black opacity-60 hover:opacity-100 focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;