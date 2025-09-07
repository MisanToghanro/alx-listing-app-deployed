
import { PillProps } from "../../interfaces";

const Pill: React.FC<PillProps> = ({label, isActive=false, onClick})=>{

    return(
        <button 
        onClick={onClick}
         className={`rounded-full border cursor-pointer hover:bg-[#2f866f] hover:text-white px-4 py-2
            ${isActive ? 'bg-[#2f866f] text-white' : 'hover:bg-[#2f866f] hover:text-white' }`}>
            {label}
        </button>
    )
}
export default Pill;