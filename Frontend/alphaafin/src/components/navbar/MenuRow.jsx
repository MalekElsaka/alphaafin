import { Link, useLocation } from "react-router-dom";

const MenuRow = ({ label,  setIsOpenMenu}) => {
    const location = useLocation();

    const processLabel = (label) => {
        if(label.toLowerCase()==="home") return "/";
        return '/'+label.toLowerCase().replace(/ /g, '-').replace(/['"]/g, '');
      };

    const isActive = location.pathname===processLabel(label);
    return (
        <Link onClick={()=>setIsOpenMenu(false)} to={processLabel(label)} className={`w-full text-[14px] font-semibold pl-8 flex items-center h-[86.2px] ${isActive ? 'bg-alpha_orange' : 'hover:bg-alpha_black hover:text-white'} cursor-pointer border-t border-gray-200`}>
            <p>{label}</p>
        </Link>

    );
}

export default MenuRow;