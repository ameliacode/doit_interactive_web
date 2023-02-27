import { faFirstdraft } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Article = (props) => {
    return(
        <article 
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        className="group relative flex-1 pt-[70px] px-[40px] pb-[100px] opacity-60 z-10 cursor-pointer transit
        before:block before:content-[''] before:w-[80%] before:h-[95%] before:bg-[#444] before:absolute before:top-0 before:left-[-200px] before:opacity-0 before:duration-1000
        hover:flex-[1.5] hover:opacity-100 hover:z-20 hover:before:left-0 hover:before:opacity-100 ">
            <div className="w-full h-full flex flex-wrap content-between relative">
                <div className="w-full duration-500 group-hover:w-3/4">
                    <h2 className="font-alegreya text-white text-[2vw] mb-[40px] pt-[40px] duration-1000 
                    after:block after:h-[2px] after:content-[''] after:w-[40px] after:bg-[#777] after:mt-[20px] after:duration-[1.5s]
                    group-hover:text-[5vw] group-hover:pt-0 group-hover:after:w-[120px] group-hover:after:bg-orange-400
                    ">{props.h2}</h2>
                    <p className="text-[12px] text-[#999] font-noto">
                        Sunt esse commodo dolor eu id. In laboris reprehenderit aliqua veniam ullamco tempor sit amet sunt proident veniam consequat.</p>
                </div>
                <figure className="w-full h-[15vh] bg-[#777] origin-[left_center] realtive overflow-hidden saturate-[10%] duration-1000 drop-shadow-[5px_5px_30px_rgba(0,0,0,0.3)]
                group-hover:h-[25vh] group-hover:saturate-[120%] group-hover:translate-[3vh]">
                    <video className="w-full h-full object-cover scale-110" 
                    src={props.vid} muted loop/>
                </figure>
            </div>
        </article>
    );
}

const Template11 = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [videoSrc, setVideoSrc] = useState('');
    const [isAsideOpen, setIsAsideOpen] = useState(false);
  
    const handleArticleMouseEnter = (e) => {
      e.currentTarget.querySelectorAll('video').forEach((v) => {
        v.play();
      });
    };
  
    const handleArticleMouseLeave = (e) => {
      e.currentTarget.querySelectorAll('video').forEach((v) => {
        v.pause();
      });
    };
  
    const handleArticleClick = (e) => {
      const articleTitle = e.currentTarget.querySelector('h2').innerText;
      const articleText = e.currentTarget.querySelector('p').innerText;
      const articleVideoSrc = e.currentTarget.querySelector('video').getAttribute('src');
  
      setTitle(articleTitle);
      setText(articleText);
      setVideoSrc(articleVideoSrc);
      setIsAsideOpen(true);
    };
  
    const handleCloseClick = () => {
      setIsAsideOpen(false);
      setVideoSrc('');
    };

    return(
        <main className="w-full h-screen bg-[#333] flex">
            <header className="w-[20%] h-full flex py-[10vh] px-[5vw] flex-wrap content-between justify-start relative z-30">
                <h1 className="text-0 text-white ">
                    <FontAwesomeIcon icon={faFirstdraft} className="text-[5vw] mb-[15px] mr-[4vw]"/>
                    <span className="text-[0.8vw] font-noto">DCODELAB</span>
                </h1>
                <address className="not-italic text-[9px] font-noto text-[#888]">
                    2021 DCODELAB <br/> ALL RIGHT RESERVED.
                </address>
            </header>
            <nav className="absolute top-[10vh] right-[5vw] z-30">
                <ul className="flex">
                    <li><a className="text-[18px] text-[#bbb] mr-[30px]"
                    href="#"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                    <li><a className="text-[18px] text-[#bbb] mr-[30px]"
                    href="#"><FontAwesomeIcon icon={faSearch}/></a></li>
                </ul>
            </nav>
            <section className="relative w-[80%] h-full flex pt-[140px] z-10">
               {
                ArticleInfo.map((item, index) => (
                    <Article key={index}
                    onMouseEnter={handleArticleMouseEnter}
                    onMouseLeave={handleArticleMouseLeave}
                    onClick={handleArticleClick} 
                    h2={item.h2} 
                    vid={item.vid}/>
                ))
               }
            </section>
            <aside className={`${isAsideOpen ? 'opacity-100 left-0' : 'left-[-100%] opacity-0'} w-full h-full bg-[#222] absolute top-0 box-border pt-[20vh] pb-[14vh] pr-[7vw] pl-[20vw] flex justify-between duration-1000 z-20`}>
                <div className="w-1/4 h-full">
                    <h1 className="font-normal font-alegreya text-[6vw] text-[#ddd] mb-[20px]">
                        {title}</h1>
                    <p className="font-noto text-[0.85vw] text-[#666] mb-[60px]">
                        {text}
                    </p>
                    <span className="cursor-pointer text-orange-400"  onClick={handleCloseClick}>
                       
                        CLOSE</span>
                </div>
                <figure className="w-[72%] h-full ">
                    <video className="w-full h-full object-cover" 
                    src={videoSrc} loop muted/>
                </figure>
            </aside>
        </main>
    )
}

export default Template11;

const ArticleInfo = [
    {
        h2: "01",
        vid: "vids/template-11/vid1.mp4"
    },
    {
        h2: "02",
        vid: "vids/template-11/vid2.mp4"
    },
    {
        h2: "03",
        vid: "vids/template-11/vid3.mp4"
    },
    {
        h2: "04",
        vid: "vids/template-11/vid4.mp4"
    },
]