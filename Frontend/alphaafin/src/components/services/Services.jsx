import { useState, useEffect } from 'react';
import ServiceRow from "./ServiceRow";
import servicesIcon from "../../assets/services-icon.png";
import carousel1 from '../../assets/carousel_1.jpg';
import carousel2 from '../../assets/carousel_2.jpg';
import carousel3 from '../../assets/carousel_3.jpg';

import { content } from "./content";

const images = [carousel1, carousel2, carousel3];

const Services = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="w-full h-[276px] bg-[#F5F5F5] flex flex-col items-center justify-center">
                <img className="h-[60px] w-[80px]" src={servicesIcon} alt="" />
                <p className="text-[37px] mt-2 text-alpha_black font-cairo font-semibold">Our Services</p>
            </div>

            <div className="w-full flex pb-14 flex-row justify-center bg-[#F5F5F5] lg:min-h-[2267px]">
                <div className="w-full flex flex-row max-w-[1260px] px-4 space-x-4 h-full">

                    <div className="lg:w-fit w-full h-full pt-3 flex flex-col space-y-12">
                        <ServiceRow headers={{ l: "Home Loans", r: "First home buyer" }} icons={{ l: "coins", r: "coins" }} content={content[0]} />
                        <ServiceRow headers={{ l: "Refinancing", r: "Investment Property" }} icons={{ l: "key", r: "invest" }} content={content[1]} />
                        <ServiceRow headers={{ l: "SMSF", r: "Asset Finance" }} icons={{ l: "key", r: "invest" }} content={content[2]} />
                        <ServiceRow headers={{ l: "Personal Loans", r: "Expat Loans" }} icons={{ l: "key", r: "expat" }} content={content[3]} />
                        <ServiceRow headers={{ l: "Business Loans", r: "Personal Loans" }} icons={{ l: "business", r: "business" }} content={content[4]} />
                    </div>

                    <div className="w-[436px] hidden lg:flex rounded-2xl overflow-hidden relative">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`w-full h-full object-cover rounded-2xl absolute top-0 left-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 zoom-out' : 'opacity-0'}`}
                                src={image}
                                alt=""
                            />
                        ))}
                    </div>

                </div>
            </div>


            <div className=' lg:hidden flex flex-row min-h-[500px] px-[22px]'>
                <div className="w-full mx-auto mt-12 flex rounded-2xl overflow-hidden relative">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`w-full h-full object-cover rounded-2xl absolute top-0 left-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 zoom-out' : 'opacity-0'}`}
                            src={image}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;