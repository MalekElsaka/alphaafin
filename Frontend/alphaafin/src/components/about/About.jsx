const About = () => {
    return (
        <div className="w-full bg-alpha_gray items-stretch flex justify-center lg:flex-row flex-col h-fit pt-6 pb-16 px-8 border-t-8 mt-2 lg:space-x-9 lg:space-y-0 space-y-10 border-alpha_orange">
            <div className="rounded-2xl bg-white border-b-[5px] w-full lg:max-w-[600px] border-alpha_orange py-12 pl-9 pr-8 ">
                <p className="text-[24px] mb-3 text-alpha_black opacity-90 font-cairo font-semibold">Our Story</p>
                <p className="font-cairo leading-8 text-[17.5px]">Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.</p>
                <p className="mt-7 hover:ml-3 font-medium text-[13px] hover:text-alpha_orange cursor-pointer transition-all duration-500">KNOW MORE</p>
            </div>
            <div className="rounded-2xl bg-white border-b-[5px] w-full lg:max-w-[600px] border-alpha_orange py-12 pl-9 pr-8">
                <p className="text-[24px] mb-3 text-alpha_black opacity-90 font-cairo font-semibold">Our Mission</p>
                <p className="font-cairo leading-8 text-[17.5px]">At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.</p>
            </div>
        </div>
    );
}

export default About;