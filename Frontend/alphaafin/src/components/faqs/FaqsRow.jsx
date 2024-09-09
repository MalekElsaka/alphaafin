import { useState } from "react";

const FaqsRow = ({ text, setIsOpenRow, isOpenRow, index }) => {

    const handleClick = () => {
        setIsOpenRow(prev => prev.map((item, idx) => idx === index ? !item : false));
    };

    return (
        <>
            <div onClick={handleClick}
                className={`w-full h-fit py-[17px] cursor-pointer items-center flex ${isOpenRow[index] ? 'text-alpha_orange' : ''} px-5 font-cairo justify-between font-semibold border-[0.5px] h-1/5`} >
                <p>{text}</p>
                {!isOpenRow[index] && <svg className="e-font-icon-svg e-fas-plus w-4 h-4" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>}
                {isOpenRow[index] && <svg className="e-font-icon-svg e-fas-minus fill-alpha_orange w-4 h-4" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>}
            </div>

            <div className={`transition-all duration-500 ease-in-out ${isOpenRow[index] ? 'max-h-[90px] ' : 'max-h-0 '} overflow-hidden w-full items-center text-[17px] flex px-5 font-cairo h-fit `}>
                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </>
    );
}

export default FaqsRow;