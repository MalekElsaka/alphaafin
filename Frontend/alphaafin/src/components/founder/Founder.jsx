import founder from "../../assets/founder.png";
import pawan from "../../assets/pawan.png";

const Founder = () => {
    return (
        <div className="w-full h-[650px] mt-6 pt-10 pb-2 bg-white flex flex-col items-center ">
            <img className="h-[70px] w-[80px]" src={founder} alt="" />
            <p className="text-[37px]  text-alpha_black font-cairo font-semibold">Meet Our Founder</p>
            <div className="w-full h-fit mt-6 flex justify-center">
                <img className="w-[260px] h-[416px] -ml-6" src={pawan} alt="" />
            </div>
        </div>
    );
}

export default Founder;