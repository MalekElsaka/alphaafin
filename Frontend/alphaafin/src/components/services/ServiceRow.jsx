import coins from "../../assets/coins.png"
import expat from "../../assets/expat.png"
import invest from "../../assets/invest.png"
import key from "../../assets/key.png"
import business from "../../assets/business.png"

const iconMap = {
    coins,
    expat,
    invest,
    key,
    business
};

const ServiceRow = ({ headers, icons, content }) => {
    return (
        <div className="w-full h-fit flex flex-row space-x-5 px-[6px]">
            
            <div className="rounded-2xl bg-white border-b-[5px] flex flex-col h-fit lg:max-w-[395px] border-alpha_orange py-6 px-5 ">
                <div className="flex w-full h-fit justify-center items-center border-b border-black pb-6 mb-6">
                    <img className="h-12 w-12 mr-3" src={iconMap[icons.l]} alt="" />
                    <p className="text-[20px] text-alpha_black opacity-90 font-cairo font-semibold">{headers.l}</p>
                </div>
                <p className="font-cairo leading-8 mx-2 text-[17.5px]">{content.l}</p>
            </div>

            <div className="rounded-2xl bg-white border-b-[5px] flex flex-col h-fit lg:max-w-[395px] border-alpha_orange py-6 px-5 ">
                <div className="flex w-full h-fit justify-center items-center border-b border-black pb-6 mb-6">
                    <img className="h-12 w-12 mr-3" src={iconMap[icons.r]} alt="" />
                    <p className="text-[20px] text-alpha_black opacity-90 font-cairo font-semibold">{headers.r}</p>
                </div>
                <p className="font-cairo leading-8 mx-2 text-[17.5px]">{content.r}</p>
            </div>
        </div>
    );
}

export default ServiceRow;