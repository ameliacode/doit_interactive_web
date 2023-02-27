import { faFacebook, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return(
        <header className="w-full h-[80px] relative 2xl:w-[400px] 2xl:h-full bg-gradient-to-tr from-[#0ff] to-[#4169e1] 2xl:fixed top-0 left-0">
            <h1 className={`font-bold font-orbitron text-[24px] bottom-[25px] xl:top-1/4
            2xl:text-[50px] tracking-[1px] absolute leading-none left-[50px] 2xl:top-1/2 2xl:translate-y-[-50%] text-white 
            2xl:before:content-["UI/UX_DEVELOPMENT"] 2xl:before:block 2xl:before:text-[14px] 2xl:before:font-orbitron 2xl:before:text-white 2xl:before:tracking-[2px] 2xl:before:absolute 2xl:before:left-0 2xl:before:top-[140px] 2xl:before:opacity-80
            xl:after:content-[''] xl:after:block xl:after:w-[150px] xl:after:h-[2px] xl:after:bg-white xl:after:mt-[20px]`}>
                DECODE LAB</h1>
            <ul className="hidden md:flex absolute right-[40px] bottom-[25px] 2xl:left-[40px] 2xl:bottom-[100px]">
                <li className="float-left ml-[20px] 2xl:mr-[10px] 2xl:ml-0">
                    <a href="#" className="text-[20px] text-white">
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                        <span className="hidden 2xl:inline-block font-bold font-noto opacity-70 scale-[0.7]">
                            Twitter</span>
                    </a>
                </li>
                <li className="float-left ml-[20px] 2xl:mr-[10px] 2xl:ml-0">
                    <a href="#" className="text-[20px] text-white">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <span className="hidden 2xl:inline-block font-bold font-noto opacity-70 scale-[0.7] ">
                            Facebook</span>
                    </a>
                </li>
                <li className="float-left ml-[20px] 2xl:mr-[10px] 2xl:ml-0">
                    <a href="#" className="text-[20px] text-white">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span className="hidden 2xl:inline-block font-bold font-noto opacity-70 scale-[0.7] ">
                            E-mail</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;