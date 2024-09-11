import founder from "../../assets/founder_gold.png"

const Pawan = () => {
    return (
        <div
            className="w-full mt-16 flex flex-col py-8 items-center h-fit px-6"
            style={{ backgroundImage: `url(${"https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-03-min-1.jpg"})`, backgroundSize: 'cover', opacity: 0.9 }}
        >
            <img loading="lazy" className="h-[80px] w-[85px]" src={founder} alt="" />
            <p className=" text-[46px] font-cairo text-center leading-10 font-semibold">Talk To PAWAN Now!</p>

            <button className="bg-white md2:w-[152px] w-full rounded-md hover:scale-110 transition-transform duration-300  min-h-[63px] h-[63px] font-cairo font-semibold text-[14px] mt-12">CONTACT US</button>
            <p className="font-cairo  mt-14 text-center text-[20px]">Feel Free To Get In Touch For No Obligations.</p>
        </div>
    );
}

export default Pawan;