import servicesIcon from "../../assets/services-icon.png";
import img from '../../assets/carousel_1.jpg'
import Pawan from "../contacts/Pawan";
import QuickContact from "../contacts/QuickContact";

const AboutUs = () => {
    return (
        <>

            <div className="flex flex-col h-fit pb-16 bg-[#F5F5F5] px-6 w-full">

                <div className="flex flex-row max-w-[1250px] mx-auto mb-8 mt-2 w-full">
                    <p className="font-cairo text-[46px] font-semibold">About Us</p>
                </div>

                <div className="w-full mb-16 mt-5 bg-[#F5F5F5] flex flex-col items-center justify-center">
                    <img className="h-[60px] w-[80px]" src={servicesIcon} alt="" />
                    <p className="text-[37px] mt-2 text-alpha_black font-cairo font-semibold">We Believe You're Bright</p>
                </div>

                <div className="flex flex-row h-fit max-w-[1250px] w-full mx-auto space-x-20">

                    <div className="flex-col flex flex-1 h-fit ">
                        <div className="w-full ">
                            <img className="w-full rounded-xl max-h-[300px] h-full object-cover" src={img} alt="" />
                        </div>
                        <p className="font-cairo mb-3 font-semibold mt-6 text-[20px]">Our Mission</p>
                        <p className="leading-8 font-cairo text-[19px]">Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.</p>
                    </div>


                    <div className="flex-col flex flex-1 h-fit ">
                        <p className="font-cairo mb-3 font-semibold text-[20px]">Welcome to Alphaa Financial Solutions</p>
                        <p className="leading-8 font-cairo text-[17px]">At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>
                        <p className="font-cairo mb-3 font-semibold text-[20px] mt-8">Our Story</p>
                        <p className="leading-8 font-cairo text-[17px]"> Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
                            Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.</p>
                    </div>

                </div>
            </div>


            <div className="flex flex-col h-fit py-14 bg-alpha_gray text-white px-6 w-full">

                <div className="flex lg:flex-row flex-col h-fit max-w-[1250px] w-full mx-auto lg:space-x-16">
                    <div className="flex lg:w-[53%] w-full rounded-2xl overflow-clip border-l-8 border-b-8 border-alpha_orange lg:order-1 order-2">
                        <img className="w-full min-h-[640px] h-full object-cover" src={img} alt="" />
                    </div>

                    <div className="flex flex-col lg:text-start text-center lg:w-[47%] w-full lg:py-12 pb-12 lg:order-2 order-1">
                        <p className="font-cairo text-start font-semibold text-alpha_orange mb-3">Why Choose Us?</p>
                        <p className="font-cairo font-semibold text-[38px] mb-4">Our Expertise</p>
                        <p className="leading-8 font-cairo text-[17px]">Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.</p>
                        <p className="leading-8 font-cairo mt-7 text-[17px]">Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>
                        <p className="leading-8 font-cairo mt-7 text-[17px]">Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.</p>
                        <p className="leading-8 font-cairo mt-7 text-[17px]">Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
                    </div>
                </div>
            </div>

            <Pawan/>

            <QuickContact/>

        </>
    );
}

export default AboutUs;