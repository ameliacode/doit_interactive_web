
import { faBolt, faCloud, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Temperature = () =>{
    return(
        <>
        <div className="group-face8 w-full h-[400px] float-left border text-center mb-[20px] border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]" >
            <h2 className="text-left tracking-normal text-2xl font-bold text-white transition-all duration-500  group-face8-hover:opacity-100 group-face8-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face8-hover:text-[#e0ffff]">
                Weather
            </h2>
            <div className="flex mt-[60px] justify-between">
            <FontAwesomeIcon icon={faCloud} className="text-white text-[180px] opacity-90 transition-all duration-500 group-face8-hover:opacity-100 group-face8-hover:scale-[1.2] group-face8-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face8-hover:text-[#e0ffff]"/>
            <span className="font-bold text-[120px] text-white">
                26
                <em className="font-bold not-italic text-[60px] font-roboto relative top-[-80px]">
                o</em></span>
            </div>
        </div>
        <div className="group-face8 w-[290px] h-[380px] float-left border text-center mr-[20px] border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]" >
            <FontAwesomeIcon icon={faSun} className="text-white text-[120px] opacity-80 transition-all duration-500 group-face8-hover:opacity-100 group-face8-hover:scale-[1.2] group-face8-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face8-hover:text-[#e0ffff]"/>
            <h3 className="mt-[30px] mb-[5px] font-bold text-[20px] text-white">
                Sunny</h3>
            <p className="text-[16px] tracking-tight font-roboto text-[#ccc]">
                Afternoon temperature</p>
            <h4 className="text-[40px] mt-[20px] tracking-[3px] relative text-white">
                23
                <b className="font-bold text-[24px] font-roboto text-[#ddd] relative top-[-22px]">
                    o</b></h4>
        </div>
        <div className="group-face8 w-[290px] h-[380px] float-left border text-center border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]" >
            <FontAwesomeIcon icon={faBolt} className="text-white text-[120px] opacity-80 transition-all duration-500 group-face8-hover:opacity-100 group-face8-hover:scale-[1.2] group-face8-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face8-hover:text-[#e0ffff]"/>
            <h3 className="mt-[30px] mb-[5px] font-bold text-[20px] text-white">
                Lightning</h3>
            <p className="text-[16px] tracking-tight font-roboto text-[#ccc]">
                Night temperature</p>
            <h4 className="text-[40px] mt-[20px] tracking-[3px] relative text-white">
                18
                <b className="font-bold text-[24px] font-roboto text-[#ddd] relative top-[-22px]">
                    o</b></h4>
        </div>
        </>
    )
}

export default Temperature;