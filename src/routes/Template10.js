import { useEffect } from "react";
import Advertisement from "./template-10/Advertisement";
import Company from "./template-10/Company";
import DcodeLab from "./template-10/DcodeLab";
import Members from "./template-10/Members";
import Promotion from "./template-10/Promotion";
import Services from "./template-10/Services";
import Temperature from "./template-10/Temperature";
import WhatsNew from "./template-10/WhatsNew";

const Face = (props) => {
    return (
        <article className={`w-full h-full backface-hidden absolute top-0 left-0 group ${props.transform}`}>
            <h1 className="text-white absolute left-0 top-0 text-[30px] opacity-0 duration-500 transition-all group-hover:top-[-60px] group-hover:opacity-100">
                {props.h1}
            </h1>
            <div className="w-full h-full">
                {props.children}
            </div>
        </article>  
    )
}

const Template10 = () => {

    useEffect(() => {
        const circle = document.querySelector("section");
        const articles = circle.querySelectorAll("article");
    
        for (let el of articles) {
          el.addEventListener("mouseenter", () => {
            circle.style.animationPlayState = "paused";
          });
    
          el.addEventListener("mouseleave", () => {
            circle.style.animationPlayState = "running";
          });
        }
    
        // cleanup function to remove event listeners
        return () => {
          for (let el of articles) {
            el.removeEventListener("mouseenter", () => {
              circle.style.animationPlayState = "paused";
            });
    
            el.removeEventListener("mouseleave", () => {
              circle.style.animationPlayState = "running";
            });
          }
        };
      }, []);

    return(
        <main className="bg-black fixed w-full h-full wrap text-[#8d8d8d] text-[17px] tracking-[1px] font-orbitron ">
            <video className="w-full h-full object-cover fixed opacity-50" src="img/template-10/bg.mp4" loop autoPlay muted/>
            <section className="circle transform-style-3d animate-rotationY w-[600px] h-[800px] absolute top-1/2 left-1/2 mt-[-400px] ml-[-300px]">
                {
                CompanyInfo.map((item, index) => (
                    <Face key={index} index={index} h1={item.h1} transform={item.transform}>
                        {item.children}
                    </Face>
                ))
                }
            </section>
        </main>
    )
}

export default Template10;

const CompanyInfo = [
{
    h1: "Co Company",
    children: <Company/>,
    transform: "face1"
},
{
    h1: "What's New",
    children: <WhatsNew/>,
    transform: "face2"
},
{
    h1: "Members",
    children: <Members/>,
    transform: "face3"
},
{
    h1: "Advertisement",
    children: <Advertisement/>,
    transform: "face4"
},
{
    h1: "DCODELAB",
    children: <DcodeLab/>,
    transform: "face5"
},
{
    h1: "Services",
    children: <Services/>,
    transform: "face6"
},
{
    h1: "Promotion",
    children: <Promotion/>,
    transform: "face7"
},
{
    h1: "Temperature",
    children: <Temperature/>,
    transform: "face8"
},
]