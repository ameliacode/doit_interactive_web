import { faAndroid, faApple, faFacebookSquare, faGoogle, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const  CompanyCard = (props) => {
    return(
        <div className="group-face1 w-[280px] h-[254px] float-left border text-center mx-[10px] mb-[20px] border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]" >
            <p><FontAwesomeIcon icon={props.icon} className="text-[100px] transition-all duration-500  opacity-80 group-face1-hover:opacity-100 group-face1-hover:scale-[1.2] group-face1-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face1-hover:text-[#e0ffff]"/></p>
            <h2 className="mt-[20px] tracking-[2px] transition-all group-face1-hover:opacity-100 group-face1-hover:scale-[1.2] group-face1-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face1-hover:text-[#e0ffff]">{props.h2}</h2>
        </div>
    )
}
const Company = () => {
    return(
        <>
        {
            SocialInfo.map((item, index) => (
                <CompanyCard h2={item.h2} icon={item.icon}/>
            ))
        }
        </>
    );
}

export default Company;

const SocialInfo = [
    {
        h2: "Android",
        icon: faAndroid
    },
    {
        h2: "Apple",
        icon: faApple
    },
    {
        h2: "Twitter",
        icon: faTwitter
    },
    {
        h2: "Facebook",
        icon: faFacebookSquare
    },
    {
        h2: "Youtube",
        icon: faYoutube
    },
    {
        h2: "Google",
        icon: faGoogle
    },
]