import phone from "../../assets/phone.png"
import IconText from "../navbar/IconText";

const ContactUs = () => {
    return (
        <>
            <div className="bg-white mx-auto flex mt-16 md2:mb-12 flex-row max-w-[1290px] w-full px-6 py-4 h-fit ">

                <div className="md2:w-[52%] w-full flex md2:items-start items-center flex-col pt-2 h-full ">
                    <p className="font-cairo mb-5 text-[38px] font-semibold">Contact Us</p>
                    <p className="font-cairo md2:text-start text-center text-[17px] mb-6">Please feel free to ask if you have any further questions.</p>
                    <IconText iconClass="e-fas-map-marker-alt" text="Sydney, Australia" style={{ m: "mb-4", t: "text-black font-semibold" }} />
                    <IconText iconClass="e-fas-phone-alt" text="0468328227" style={{ m: "mb-4", t: "text-black font-semibold" }} />
                    <IconText iconClass="e-fas-clock" text="Mon - Fri: 9:00am - 5:00pm" style={{ m: "mb-4", t: "text-black font-semibold" }} />
                    <IconText iconClass="e-fas-clock" text="Weekends Appointments Only" style={{ m: "mb-4", t: "text-black font-semibold" }} />

                    <div className="flex flex-row mt-6 md2:justify-start justify-center w-full h-fit space-x-2">
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
                </div>

                <div className="w-[48%] md2:flex h-full hidden">
                    <img loading="lazy" className="h-auto w-full self-start object-contain" src={phone} alt="" />
                </div>

            </div>

            <div className="md2:hidden flex w-full">
                <div className="mx-6">
                    <img loading="lazy" className="h-auto w-full self-start object-contain" src={phone} alt="" />
                </div>
            </div>
        </>
    );
}

export default ContactUs;