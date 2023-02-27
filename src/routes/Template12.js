import { faBars, faPause, faPlay, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const Article = (props) => {
    return(
        <article className={`w-full h-full absolute top-0 left-0 ${props.current===props.index ? "opacity-100 scale-110 on":'opacity-60 scale-[0.8]'}`}>
            <div className="w-full h-full bg-[#f0f7ff] pt-[5vh] px-[2.5vw] pb-[8vh] box-border flex justify-center content-between flex-wrap rounded-[10px] drop-shadow-[10px_10px_20px_rgba(0,0,0,0.1)]
             transition-all duration-1000   
            ">
                <div className={`pic ${props.bg} w-[15vw] h-[15vw] mx-auto rounded-full bg-no-repeat relative flex justify-center items-center bg-cover bg-[200%]
                ${props.index===props.current ? "after:animate-discRotation before:animate-shadowRotation":""}
                
                `}>
                    <div className="w-[3vw] h-[3vw] rounded-full bg-[#e4f1ff] relative z-30 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1)]">

                    </div>
                </div>
                <div className="text-center relative z-30">
                    <h2 className="text-[20px] font-roboto font-bold text-[#222] mb-[2vh]">
                        {props.h2}</h2>
                    <p className="text-[12px] font-noto text-[#777] mb-[3vh]">
                        In laboris mollit velit pariatur. Duis veniam culpa esse commodo magna laboris ut.</p>
                    <ul className="flex justify-around">
                        <li className="pause cursor-pointer opacity-60 duration-500 hover:opacity-80 hover:scale-150">
                            <FontAwesomeIcon icon={faPause}/>
                        </li>
                        <li className="play scale-150 opacity-80 cursor-pointer duration-500 hover:opacity-100 hover:scale-[2.0]">
                            <FontAwesomeIcon icon={faPlay}/>
                        </li>
                        <li className="load cursor-pointer opacity-60 duration-500 hover:opacity-80 hover:scale-150">
                            <FontAwesomeIcon icon={faRedoAlt}/>
                        </li>
                    </ul>
                    <audio src={`music/template-12/${props.h2}.mp3`}/>
                </div>
            </div>
        </article>
    )
}

const Template12 = () => {

    const frameRef = useRef(null);
    const [num, setNum] = useState(0);
    const [active, setActive] = useState(0);
    const [lists, setLists] = useState([]);
    const [audio, setAudio] = useState([]);
  
    const deg = 45;
    const len = lists.length - 1;
  
    useEffect(() => {
      const frame = frameRef.current
      const newLists = Array.from(frame.querySelectorAll('article'));
      const newAudio = Array.from(frame.querySelectorAll('audio'));
  
      setLists(newLists);
      setAudio(newAudio);
    }, []);

    useEffect(() => {
        if (lists.length) {
          for (let i = 0; i < lists.length; i++) {
            const el = lists[i];
            const pic = el.querySelector('.pic');
            el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    
            const play = el.querySelector('.play');
            const pause = el.querySelector('.pause');
            const load = el.querySelector('.load');
    
            play.addEventListener('click', (e) => {
              const isActive = e.currentTarget.closest('article').classList.contains('on');
              if (isActive) {
                e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
                e.currentTarget.closest('article').querySelector('audio').play();
              }
            });
    
            pause.addEventListener('click', (e) => {
              const isActive = e.currentTarget.closest('article').classList.contains('on');
              if (isActive) {
                e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
                e.currentTarget.closest('article').querySelector('audio').pause();
              }
            });
    
            load.addEventListener('click', (e) => {
              const isActive = e.currentTarget.closest('article').classList.contains('on');
              if (isActive) {
                e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
                e.currentTarget.closest('article').querySelector('audio').load();
                e.currentTarget.closest('article').querySelector('audio').play();
              }
            });
          }
        }
      }, [lists]);
    
      function activation(index) {
        for (let i = 0; i < lists.length; i++) {
          lists[i].classList.remove('on');
        }
        lists[index].classList.add('on');
      }
    
      function initMusic() {
        for (let i = 0; i < audio.length; i++) {
          audio[i].pause();
          audio[i].currentTime = 0;
        }
    
        const picElements = document.querySelectorAll('.pic');
        for (let i = 0; i < picElements.length; i++) {
          picElements[i].classList.remove('on');
        }
      }
    
      function handlePrevClick() {
        initMusic();
        setNum(num + 1);
        const newTransform = `rotate(${deg * (num + 1)}deg)`;
        document.querySelector('section').style.transform = newTransform;
    
        if (active === 0) {
          setActive(len);
        } else {
          setActive(active - 1);
        }
        activation(active);
      }

      function handleNextClick() {
        initMusic();
        setNum(num - 1);
        const newTransform = `rotate(${deg * (num - 1)}deg)`;
        document.querySelector('section').style.transform = newTransform;
      
        if (active === len) {
            setActive(0);
        } else {
            setActive(active + 1);
        }
        activation(active);
    }

    return(
        <>
        <figure className="w-full h-screen overflow-hidden relative bg-gradient-to-tr from-[#EE82EE] to-[#FFC0CB]">
            <h1 className="absolute top-[7vh] left-[4vw] text-0">
                <strong className="block text-[36px] text-white tracking-[1px]">
                    DCODELAB</strong>
                <span className="text-[12px] font-noto text-white tracking-[1px] opacity-80">
                    UI/UX DESIGN & DEVELOPMENT</span>
            </h1>
            <a href="#" className="absolute top-[8vh] right-[4vw] text-[24px] text-white">
                <FontAwesomeIcon icon={faBars}/>
            </a>
            <p className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 font-noto text-[12px] text-white tracking-[2px] opacity-80">
                2021 Designed by DCODELAB</p>
            <section ref={frameRef}
                className="w-[20vw] h-[65vh] absolute left-1/2 top-[140%] mt-[-25vh] ml-[-10vw] duration-1000">
                {
                    MusicInfo.map((item, index) => (
                        <Article key={index} index={index} h2={item.h2} current={active} bg={item.bg}/>
                    ))
                }
            </section>
            <div 
                onClick={handlePrevClick}
                className="prev group w-[60px] h-[60px] absolute top-1/2 left-[30%] translate-[-20vw_-50%] flex items-center text-left cursor-pointer
             before:content-[''] before:block before:w-full before:h-[1px] before:bg-white before:absolute before:top-1/2 before:left-0 before:origin-left before:rotate-[-180deg] before:duration-500
             after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:absolute after:bottom-1/2 after:left-0 after:origin-left after:rotate-180 after:duration-500
             hover:before:rotate-[-30deg] hover:after:rotate-[30deg]">
                <span className="text-[11px] font-noto text-white opacity-100 translate-x-[30%] duration-500 group-hover:opacity-0 group-hover:translate-x-full">
                    PREV MUSIC</span>
            </div>
            <div 
                onClick={handleNextClick}
                className="next group w-[60px] h-[60px] absolute top-1/2 right-[30%] translate-[20vw_-50%] flex items-center text-right cursor-pointer
             before:content-[''] before:block before:w-full before:h-[1px] before:bg-white before:absolute before:top-1/2 before:left-0 before:origin-right before:rotate-180 before:duration-500
             after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:absolute after:bottom-1/2 after:left-0 after:origin-right after:rotate-[-180deg] after:duration-500
             hover:before:rotate-[30deg] hover:after:rotate-[-30deg]">
                <span className="text-[11px] font-noto text-white opacity-100 translate-x-[-30%] duration-500 group-hover:opacity-0 group-hover:-translate-x-full">
                    NEXT MUSIC</span>
            </div>
        </figure>
        </>
    );
}

export default Template12;

const MusicInfo = [
    {
        h2: "Blizzards",
        bg: "bg-member1",
    },
    {
        h2: "Calm",
        bg: "bg-member2",
    },
    {
        h2: "Dusty Road",
        bg: "bg-member3",
    },
    {
        h2: "Escape",
        bg: "bg-member4",
    },
    {
        h2: "Payday",
        bg: "bg-member5",
    },
    {
        h2: "Retreat",
        bg: "bg-member6",
    },
    {
        h2: "Seasonal",
        bg: "bg-member7",
    },
    {
        h2: "Vespers",
        bg: "bg-member8",
    },
]