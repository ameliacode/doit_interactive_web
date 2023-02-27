import { faCode, faEnvelope, faList, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = (props) => {
    return(
        <div className="group-face6 w-full h-[185px] mb-[20px] border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
            <FontAwesomeIcon icon={props.icon} className="w-[22%] border-r border-[#bbb] float-left text-[50px] text-white relative text-left leading-[90px] box-border py-[17px] pr-[17px] transition-all duration-500  opacity-80 group-face6-hover:opacity-100 group-face6-hover:scale-[1.2] group-face6-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face1-hover:text-[#e0ffff]"/>
            <div className="h-full box-border float-right">
                <h2 className="tracking-wide text-xl font-bold text-white duration-500 transition-all group-face6-hover:opacity-100 group-face6-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face5-hover:text-[#e0ffff]">
                {props.h2}
                </h2>
                <p className="text-[15px] leading-tight font-noto text-[#999]">Here comes the contents for Network<br/>Show this in Detail</p>
            </div>
        </div>
    )
}

const Services = () => {
    return(
        <>
        {
            ServicesInfo.map((item, index) => (
                <ServiceCard key={index} index={index} icon={item.icon} h2={item.h2}/>
            ))
        }
        </>
    )
}

export default Services;

const ServicesInfo = [
    {
        icon: faRss,
        h2: "Network Services",
    },
    {
        icon: faCode,
        h2: "Technical Support",
    },
    {
        icon: faEnvelope,
        h2: "Customer Services",
    },
    {
        icon: faList,
        h2: "Contact Lists",
    },
]