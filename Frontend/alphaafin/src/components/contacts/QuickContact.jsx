import IconText from "../navbar/IconText";

const QuickContact = () => {
    return (
        <>

            <div className="w-full h-fit bg-alpha_gray">
                <div className="pt-[62px] pb-[62px] flex lg:flex-row flex-col max-w-[1270px] mx-auto px-8 lg:space-x-10">
                    <div className="lg:w-[44%] w-full flex lg:items-start items-center flex-col pt-4 h-full ">
                        <p className="font-cairo mb-5 text-[20px] text-alpha_orange  font-semibold">Quick Contact</p>
                        <p className="font-cairo lg:text-start text-center text-white text-[17px] mb-6">At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services.</p>
                        <IconText iconClass="e-fas-map-marker-alt" text="Sydney, Australia" style={{ m: "mb-4", t: " font-semibold text-white" }} />
                        <IconText iconClass="e-fas-phone-alt" text="0468328227" style={{ m: "mb-4", t: " font-semibold text-white" }} />
                    </div>

                    <div className="lg:w-[56%] w-full flex h-full">
                        <div className="rounded-2xl  bg-[#22232D] w-full h-fit py-12 px-8">
                            <p className="font-cairo mb-5 text-white text-[18px] font-semibold">Opening Hours</p>

                            <div className="flex flex-row items-center w-full justify-between">
                                <p className="font-cairo mb-[14px] text-alpha_orange text-[13.5px] font-semibold">MON TO FRI:</p>
                                <p className="text-white text-[13.5px]">9:00 AM | 5:00 PM</p>
                            </div>

                            <div className="flex flex-row w-full items-center justify-between">
                                <p className="font-cairo text-alpha_orange text-[13.5px] font-semibold">SAT TO SUN:</p>
                                <p className="text-white text-[12.5px]">APPOINTMENTS ONLY</p>
                            </div>

                            <button className="bg-alpha_orange hover:bg-white transition-all duration-300 mt-10 w-full h-[54px] font-cairo font-semibold text-[14px] rounded-md">SCHEDULE A VISIT</button>
                        </div>
                    </div>

                </div>

                <div className="w-full h-[10px] bg-[#22232D]"></div>

                <div className="py-[58px] items-center flex lg:flex-row flex-col max-w-[1270px] px-8 mx-auto justify-between">
                    <div className="flex flex-row w-fit h-fit space-x-4">
                        <button className="h-[36px] group p-[6px] hover:bg-alpha_black w-[36px] bg-alpha_orange rounded-sm transition-all duration-300">
                            <svg className=" group-hover:fill-white e-font-icon-svg e-fab-telegram" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                        </button>

                        <button className="h-[36px] group p-[6px] hover:bg-alpha_black w-[36px] bg-alpha_orange rounded-sm transition-all duration-300">
                            <svg className="group-hover:fill-white  e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </button>

                        <button className="h-[36px] group p-[6px] hover:bg-alpha_black w-[36px] bg-alpha_orange rounded-sm transition-all duration-300">
                            <svg className="group-hover:fill-white  e-font-icon-svg e-fab-gitlab" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path></svg>
                        </button>
                    </div>

                    <div className="w-fit h-fit lg:mt-0 mt-10 text-white">
                        <p className="">2024 © All Rights Reserved | Developed with ❤️ by Psyber Inc</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default QuickContact;