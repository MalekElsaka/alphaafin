import { useState, useEffect, useCallback } from "react";
import useThrottle from "../../hooks/useThrottle";
import IconText from "./IconText";
import MenuRow from "./MenuRow";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    
    const handleResize = useCallback(() => {
        if (window.innerWidth >= 1024) { 
            setIsOpenMenu(false);
        }
    }, []);

    const throttledResize = useThrottle(handleResize, 200);

    useEffect(() => {
        window.addEventListener('resize', throttledResize);

        return () => {
            window.removeEventListener('resize', throttledResize);
        };
    }, []);

    return (
        <div className="w-full min-h-[173px] h-fit flex flex-col">
            {/* here i must use the below div to the max-w of the child div work dont know why */}
            <div className="w-full min-h-[61px] h-fit py-4 bg-alpha_gray">
                <div className="lg:max-w-[1317px] lg:w-auto w-fit h-full mx-auto text-[16px] flex flex-wrap items-center md2:justify-end justify-center px-7 flex-row bg-alpha_gray space-x-4">
                    <IconText iconClass="e-fas-map-marker-alt" text="Sydney, Australia" style={{t:"text-white"}} />
                    <IconText iconClass="e-fas-phone-alt" text="0468328227" style={{t:"text-white"}} />
                    <IconText iconClass="e-fas-clock" text="Mon - Fri: 9:00am - 5:00pm" style={{t:"text-white"}} />
                    <IconText iconClass="e-fas-clock" text="Weekends Appointments Only" style={{t:"text-white"}} />
                </div>
            </div>
            <div className={`w-full bg-white md1:h-[112px] h-fit md1:py-0`}>
                <div className="max-w-[1317px] mx-auto md1:h-full bg-white flex md1:flex-row flex-col px-7 p-3 ">
                    <div className="md1:w-[40%] w-[100%] md1:h-full flex  items-center md1:justify-start justify-center">
                        <img className="md1:h-full md1:w-auto w-[65%] py-1 -mt-2 md1:ml-14 " src="https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313-768x252.png" alt="" />
                    </div>
                    <div className="w-[60%] h-full md1:flex hidden justify-end -mt-1 items-center space-x-10">
                        <div className="lg:flex hidden w-fit space-x-5">
                            <Link to={"/"} className="w-fit cursor-pointer group hover:bg-alpha_black min-w-fit h-[55px] px-2 items-center flex text-[13px] font-semibold rounded-md transition duration-300 ease-in-out">
                                <p  className="group-hover:text-white">HOME</p>
                            </Link>

                            <Link  to={"/about-us"}  className="w-fit cursor-pointer group hover:bg-alpha_black min-w-fit h-[55px] px-2 items-center flex text-[13px]  font-semibold rounded-md transition duration-300 ease-in-out">
                                <p className="group-hover:text-white">ABOUT US</p>
                            </Link>

                            <Link to={"services"} className="w-fit cursor-pointer group hover:bg-alpha_black min-w-fit h-[55px] px-2 items-center flex text-[13px]  font-semibold rounded-md transition duration-300 ease-in-out">
                                <p  className="group-hover:text-white">SERVICES</p>
                            </Link>

                            <Link to={"faqs"} className="w-fit cursor-pointer group hover:bg-alpha_black min-w-fit h-[55px] px-2 items-center flex text-[13px]  font-semibold rounded-md transition duration-300 ease-in-out">
                                <p  className="group-hover:text-white">FAQ'S</p>
                            </Link>
                        </div>

                        <div onClick={() => setIsOpenMenu(prev => !prev)} className="lg:hidden cursor-pointer group flex w-7 h-7">
                            {!isOpenMenu&&<svg role="presentation" className="elementor-menu-toggle__icon--open group-hover:fill-alpha_orange e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>}
                            {isOpenMenu&&<svg role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg group-hover:fill-alpha_orange e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>}
                        </div>

                        <button className="bg-alpha_black group hover:scale-110 rounded-md h-[55px] text-[13px] font-medium w-[170px] min-w-[170px] flex justify-center items-center text-white transition-transform duration-300">CALL US ANYTIME</button>
                    </div>

                    <div onClick={() => setIsOpenMenu(prev => !prev)} className="md1:hidden cursor-pointer group flex mt-4 w-7 h-7">
                    {!isOpenMenu&&<svg role="presentation" className="elementor-menu-toggle__icon--open group-hover:fill-alpha_orange e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>}
                    {isOpenMenu&&<svg role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg group-hover:fill-alpha_orange e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>}
                    </div>
                </div>

                { <div className={`w-full ${isOpenMenu?'menu-visible':'menu-hidden'} overflow-hidden absolute z-20 h-[344px] bg-white`}>
                   <MenuRow label={"HOME"} setIsOpenMenu={setIsOpenMenu}/>
                   <MenuRow label={"ABOUT US"}  setIsOpenMenu={setIsOpenMenu}/>
                   <MenuRow label={"SERVICES"}  setIsOpenMenu={setIsOpenMenu}/>
                   <MenuRow label={"FAQ'S"}  setIsOpenMenu={setIsOpenMenu}/>
                </div>}

            </div>
        </div>
    );
}

export default Navbar;