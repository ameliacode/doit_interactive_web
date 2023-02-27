import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Template7 = () => {
    const [memberIdx, setMemberIdx] = useState(0);
    const [member, setMember] = useState(memberInfo[0]);

    const handleClick = (number) => {
        setMemberIdx(number);
        setMember(memberInfo[number])
    }

    console.log(member.profileimg)

    return (
        <div className={`${member.bgcolor} transition-all duration-500 h-screen p-[50px]`}>
            <section className="w-[340px] p-[30px] bg-white 
            mx-auto rounded-lg drop-shadow-[10px_10px_30px_rgba(0,0,0,0.1)]">
                <nav className="w-full after:block after:clear-both">
                    <a className="no-underline text-[20px] text-[#666] float-left" href="#">
                        <FontAwesomeIcon icon={faBars}/>
                    </a>
                    <a className="no-underline text-[20px] text-[#666] float-right" href="#">
                        <FontAwesomeIcon icon={faStickyNote}/>
                    </a>
                </nav>
                <article className="w-full text-center">
                    <img className={`transition-all duration-500 w-[200px] h-[200px] mx-auto rounded-full mb-[20px]
                    ${member.profileshadow}`} alt="프로필 이미지" src={member.profileimg}/>
                    <h1 className="font-bold text-[22px] leading-4 text-[#555] mb-[5px] font-sans">
                        DCODELAB 
                    </h1>
                    <h2 className="font-normal text-[12px] text-[#bbb] mb-[30px]">
                        UI/UX INTERACTIVE DEVELOPER
                    </h2>
                    <a href="#" 
                    className={`transition-all duration-500 block w-[180px] h-[32px] mb-[20px] mx-auto bg-[#444] rounded-full font-bold text-[10px] text-white text-center leading-[32px]
                    ${member.btnview} ${member.btnshadow}`}>
                        VIEW MORE
                    </a>
                </article>
                <ul className="mb-[25px]">
                    <li className="w-full py-[10px] border-b-[1px] text-[#555] border-[#eee]">
                        <FontAwesomeIcon className="w-[20%] text-center text-[15px]" icon={faFacebookF}/>
                        <span className="font-normal text-[11px] font-orbitron tracking-[1px]">Visit My Facebook page.</span>
                    </li>
                    <li className="w-full py-[10px]">
                        <FontAwesomeIcon className="w-[20%] text-center text-[#555] text-[15px]" icon={faEnvelope}/>
                        <span className="font-normal text-[11px] font-orbitron tracking-[1px]">hadaboni8@naver.com</span>
                    </li>
                </ul>
                <nav className="w-full text-center">
                { memberInfo.map((item, index) => (
                    <button key={index}
                            onClick={()=> handleClick(index)}
                            className={`inline-block w-[30px] h-[30px] rounded-full mx-[10px]  
                            ${index===memberIdx ? "opacity-100 saturate-[.7]" : "opacity-40 saturate-100"} ${memberInfo[index].navothers}`
                        }
                            />
                ))    
                }
                </nav>
            </section>
        </div>
    );
}

export default Template7;

const memberInfo = [
    {
        profileimg: "img/template-7/member1.jpg",
        bgcolor: "bg-[#ebfaff]",
        profileshadow: "drop-shadow-[5px_15px_20px_rgba(173,216,230,0.8)]",
        btnview: " bg-gradient-to-bl from-[#4affff] to-[#35e0f7]",
        btnshadow: "drop-shadow-[5px_10px_15px_rgba(0,255,255,0.493)]",
        navothers: "bg-[#35e0f7] drop-shadow-[5px_5px_10px_rgba(74,255,255,0.7)]"
    },
    {
        profileimg: "img/template-7/member2.jpg",
        bgcolor: "bg-[#edffeb]",
        profileshadow: "drop-shadow-[5px_15px_20px_#bdccb783]",
        btnview: " bg-gradient-to-bl from-[#a0ff9d] to-[#55f5b2]",
        btnshadow: "drop-shadow-[5px_10px_15px_rgba(33,250,0.5,0.3)]",
        navothers: "bg-[#55f5cd] drop-shadow-[5px_5px_10px_rgba(85,245,178,0.7)]"
    },
    {
        profileimg: "img/template-7/member3.jpg",
        bgcolor: "bg-[#fff3fd]",
        profileshadow: "drop-shadow-[5px_15px_20px_rgba(252,99,214,0.2)]",
        btnview: " bg-gradient-to-bl from-[#ef74ff] to-[#ff11c4]",
        btnshadow: "drop-shadow-[5px_10px_15px_rgba(255,17,196,0.357)]",
        navothers:"bg-[#ff80df] drop-shadow-[5px_5px_10px_rgba(255,128,223,0.7)]"
    },
    {
        profileimg: "img/template-7/member4.jpg",
        bgcolor: "bg-[#f5f0ff]",
        profileshadow: "drop-shadow-[5px_15px_20px_rgba(183,82,250,0.2)]",
        btnview: " bg-gradient-to-bl from-[#8e74ff] to-[#a011ff]",
        btnshadow: "drop-shadow-[5px_10px_15px_rgba(160,17,255,0.4)]",
        navothers: "bg-[#a794fd] drop-shadow-[5px_5px_10px_rgba(167,148,253,0.7)]"
    }
]