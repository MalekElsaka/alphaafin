import img from '../../assets/carousel_1.jpg'
import Pawan from "../contacts/Pawan";
import QuickContact from "../contacts/QuickContact";
import servicesIcon from "../../assets/services-icon.png";
import { useState, useRef } from 'react';

import React from 'react';
import FaqsRow from '../faqs/FaqsRow';
import { useDraggable } from "react-use-draggable-scroll";
import Draggable from '../faqs/Draggable';




const SvgComponent = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="500"
        height="500"
        preserveAspectRatio="xMidYMid meet"
        className="moving-svg" // Add a class for the animation
        style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}
    >
        <defs>
            <clipPath id="__lottie_element_2">
                <rect width="500" height="500" x="0" y="0" />
            </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
            <g transform="matrix(1,0,0,1,117.40400695800781,227.00254821777344)" opacity="1" style={{ display: 'block' }}>
                <g opacity="1" transform="matrix(1,0,0,1,132.5959930419922,101.95500183105469)">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,143,32)"
                        strokeOpacity="1"
                        strokeWidth="30"
                        d="M57.59600067138672,-26.954999923706055 C57.59600067138672,-26.954999923706055 -0.0010000000474974513,26.954999923706055 -0.0010000000474974513,26.954999923706055 C-0.0010000000474974513,26.954999923706055 -57.59700012207031,-26.954999923706055 -57.59700012207031,-26.954999923706055"
                    />
                </g>
            </g>
            <g transform="matrix(1,0,0,1,177.40399169921875,210.194091796875)" opacity="0.8" style={{ display: 'block' }}>
                <g opacity="1" transform="matrix(1,0,0,1,72.59600067138672,41.95500183105469)">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,143,32)"
                        strokeOpacity="1"
                        strokeWidth="30"
                        d="M57.59600067138672,-26.954999923706055 C57.59600067138672,-26.954999923706055 -0.0010000000474974513,26.954999923706055 -0.0010000000474974513,26.954999923706055 C-0.0010000000474974513,26.954999923706055 -57.59700012207031,-26.954999923706055 -57.59700012207031,-26.954999923706055"
                    />
                </g>
            </g>
            <g transform="matrix(1,0,0,1,177.40399169921875,136.0449981689453)" opacity="0.5" style={{ display: 'block' }}>
                <g opacity="1" transform="matrix(1,0,0,1,72.59600067138672,41.95500183105469)">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,143,32)"
                        strokeOpacity="1"
                        strokeWidth="30"
                        d="M57.59600067138672,-26.95599937438965 C57.59600067138672,-26.95599937438965 -0.0010000000474974513,26.95599937438965 -0.0010000000474974513,26.95599937438965 C-0.0010000000474974513,26.95599937438965 -57.59700012207031,-26.95599937438965 -57.59700012207031,-26.95599937438965"
                    />
                </g>
            </g>
        </g>
    </svg>
);

const Faqs = () => {

    const sections = [
        {
            title: "Learn About Rates & Mortgages",
            image: img,
            description: "As someone who is interested in the world of finance and real estate...",
            linkText: "Watch Video"
        },
        {
            title: "Navigate Mortgage Rates",
            image: "https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-12-1.jpg",
            description: "Find out how to navigate through the world of mortgage rates...",
            linkText: "Get More Info"
        },
        {
            title: "Mortgage Down Payment",
            image: "https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-10-1.jpg",
            description: "Discover everything you need to know about mortgage down payments...",
            linkText: "Learn More"
        },
    ];

    const ref = useRef();
    const { events } = useDraggable(ref);

    const faqQuestions = [
        "What is a mortgage rate?",
        "Is a variable rate better than a fixed rate?",
        "How do I lock my mortgage rate?",
        "What is a mortgage rate hold?",
        "How often do mortgage rates change?"
    ];
    const [isOpenRow, setIsOpenRow] = useState(new Array(5).fill(false));
    return (
        <>
            <div className="flex flex-col h-fit pb-16 bg-[#F5F5F5] w-full">
                <div className="flex flex-row max-w-[1260px] mx-auto mb-2 mt-2 w-full">
                    <p className="font-cairo text-[46px] font-semibold">FAQ's</p>
                </div>

                <div className="relative w-full mb-16 h-[350px] flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${"https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-12-1.jpg"})`, backgroundSize: "cover", backgroundPosition: "center 50%" }}>
                    <div className="absolute inset-0 bg-alpha_gray opacity-70"></div>

                    <div className='z-20 mt-16 w-full h-full flex flex-col items-center justify-center'>
                        <p className='text-white text-[46px] font-cairo font-semibold'>FAQ's</p>

                        <div className='w-[120px] -mt-4 h-[120px]'>
                            <SvgComponent />
                        </div>
                    </div>
                </div>

                <div className="flex px-8 lg:flex-row flex-col items-stretch h-fit max-w-[1300px] w-full mx-auto lg:space-x-16">

                    <div className="flex lg:w-[48%] lg:order-1 relative overflow-clip rounded-xl  lg:mt-0 mt-6 order-2 w-full ">
                        <img className="w-full min-h-[520px] h-full object-cover" src={img} alt="" />
                        <div className='absolute flex flex-col items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer px-4 py-4 bg-alpha_orange right-0 w-[164px] h-[174px] rounded-bl-xl'>
                            <svg aria-hidden="true" className="e-font-icon-svg fill-alpha_gray h-14 w-14 e-fas-play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                            <p className='mt-5 font-cairo text-alpha_gray font-semibold text-[18.5px]'>Watch Video</p>
                        </div>
                    </div>


                    <div className="flex-col lg:order-2 order-1 flex lg:w-[52%] w-full ">
                        <p className="font-cairo mb-3 font-semibold opacity-90 text-[38px]">Learn About Rates & Mortages</p>
                        <p className="leading-8 font-cairo text-[19px]">As someone who is interested in the world of finance and real estate, you may find it beneficial to dive deeper into the topic of rates and mortgages.</p>

                        <div className='w-full h-full pb-8 pt-12'>
                            <div className='bg-white w-full flex-flex-col min-h-[300px] h-fit border-[1px]'>
                                {faqQuestions.map((question, index) => (
                                    <FaqsRow
                                        key={index}
                                        index={index}
                                        text={question}
                                        setIsOpenRow={setIsOpenRow}
                                        isOpenRow={isOpenRow}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center h-fit py-14 bg-alpha_gray text-white px-6 w-full">
                <div className='w-16 h-16 mt-4 bg-alpha_orange'></div>
                <p className='font-cairo text-alpha_orange font-semibold text-[15px] mt-6'>YOUR MORTAGE DOWN PAYMENT</p>
                <p className='font-cairo text-white font-semibold text-[38px] mt-6 mb-10'>How To Navigate Our Mortage Rates</p>

                <div className='flex lg:flex-row flex-col max-w-[1300px] w-full h-fit lg:space-x-7 lg:space-y-0 space-y-8 mx-auto justify-center  '>
                    <div className='flex flex-col lg:w-[30%] w-full justify-center items-center min-h-[230px] px-3 py-1 rounded-2xl bg-[#22232D]'>
                        <div className='w-14 h-9 mb-6 bg-alpha_orange'></div>
                        <p className='font-cairo font-semibold text-[22px]'>You Use Your Property</p>
                        <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='flex flex-col lg:w-[30%] w-full justify-center items-center  px-3 py-1  min-h-[230px] rounded-2xl  bg-[#22232D]'>
                        <div className='w-14 h-9 mb-6 bg-alpha_orange'></div>
                        <p className='font-cairo font-semibold text-[22px]'>The Type Mortgage</p>
                        <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='flex flex-col lg:w-[30%] w-full justify-center items-center  px-3 py-1  min-h-[230px] rounded-2xl  bg-[#22232D]'>
                        <div className='w-14 h-9 mb-6 bg-alpha_orange'></div>
                        <p className='font-cairo font-semibold text-[22px]'>With Fixed Mortgages</p>
                        <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>

            <div className='w-full bg-half-red-white px-6 h-fit pb-4 flex flex-col items-center justify-center'>
                <div className=' overflow-clip h-full max-w-[1238px] rounded-2xl min-h-[384px] w-full flex flex-col lg:flex-row'>
                    <div className='lg:w-[35%] w-full lg:min-h-full lg:max-h-full max-h-[300px]'>
                        <img className='h-full w-full object-cover' src="https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-10-1.jpg" alt="" />
                    </div>

                    <div className='lg:w-[65%] w-full bg-alpha_orange px-14 py-14 flex flex-col'>
                        <div className='flex mb-2 flex-row items-center'>
                            <div className='w-9 h-9 bg-alpha_gray'></div>
                            <p className='ml-2 text-alpha_gray text-[15.5px] font-semibold'>Online Booking</p>
                        </div>

                        <p className='text-[32px] text-alpha_gray font-cairo font-semibold'>Contact Us To Start Saving Time And Money</p>

                        <div className='flex mt-8 justify-between md1:flex-row mb-4 md1:mb-0 flex-col w-full min-h-[47px] h-fit md1:space-x-6 md1:space-y-0 space-y-4'>
                            <input className='rounded-[5px] px-3 flex-1 focus:outline-none min-h-[47px] h-[47px]' type="text" name="" id="" placeholder='Name' />
                            <input className='rounded-[5px] px-3 flex-1 focus:outline-none min-h-[47px] h-[47px]' type="text" placeholder='Email' name="" id="" />
                        </div>

                        <div className='flex md1:mt-8 justify-between md1:flex-row flex-col md1:items-center w-full h-fit md1:space-x-6 md1:space-y-0 space-y-4'>
                            <input className='rounded-[5px] px-3 flex-1 focus:outline-none min-h-[47px] h-[47px]' type="text" name="" id="" placeholder='Subject' />
                            <button className='rounded-[5px] hover:scale-105 transition-transform duration-300 min-h-[53px] px-3 bg-alpha_black text-cairo text-white font-semibold items-center flex-1 text-[13px] focus:outline-none h-[53px]'>MAKE AN APPOINTMENT</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F5F5] w-full h-fit pb-12 flex'>

                <div className='max-w-[900px] w-full mx-auto flex flex-col justify-center items-center h-fit'>

                    <div className='flex mt-[70px] flex-row w-fit h-fit space-x-5'>

                        <div className='border-r-4 h-[105px] w-[100px] border-b-4 border-alpha_orange rounded-xl overflow-clip'>
                            <img className='h-full w-full' src="https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-2-1.jpg" alt="" />
                        </div>

                        <div className='h-[105px] w-[100px] border-b-4 border-alpha_orange rounded-xl overflow-clip'>
                            <img className='h-full w-full' src="https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-1-1.jpg" alt="" />
                        </div>

                        <div className='border-l-4 h-[105px] w-[100px] border-b-4 border-alpha_orange rounded-xl overflow-clip'>
                            <img className='h-full w-full' src="https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-3-1.jpg" alt="" />
                        </div>
                    </div>
                    <Draggable events={events} ref={ref} />



                </div>
            </div>

            <QuickContact />
        </>
    );
}

export default Faqs;