import QuickContact from "../contacts/QuickContact";
import ServicesContent from "../services/Services";

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

const Services = () => {
    return (
        <>
            <div className="bg-[#F5F5F5] w-full">
                <div className="flex flex-row max-w-[1260px] mx-auto mb-2 mt-2 w-full">
                    <p className="font-cairo text-[46px] font-semibold">Services</p>
                </div>

                <div className="relative w-full h-[350px] flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${"https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-12-1.jpg"})`, backgroundSize: "cover", backgroundPosition: "center 50%" }}>
                    <div className="absolute inset-0 bg-alpha_gray opacity-70"></div>

                    <div className='z-20 mt-16 w-full h-full flex flex-col items-center justify-center'>
                        <p className='text-white text-[46px] font-cairo font-semibold'>Services</p>

                        <div className='w-[120px] -mt-4 h-[120px]'>
                            <SvgComponent />
                        </div>
                    </div>
                </div>
            </div>
            <ServicesContent />
            <QuickContact />
        </>
    );
}

export default Services;