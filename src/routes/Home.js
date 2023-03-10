import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useEffect, useRef, useState } from "react";
import {register} from "swiper/element/bundle"
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper,} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../swiper.css'
import { Link } from "react-router-dom";

const Inner = (props) => {
    return (
        <div className="inner w-full h-full z-10 bg-white p-[30px] box-border opacity-40 duration-1000">
            <Link to={props.href}>        
            <div className="relative z-10">
                <img className="w-full h-[264px] object-cover object-top" src={process.env.PUBLIC_URL + props.img}/>
                <h2 className="font-normal text-[25px] font-roboto text-[#111] mt-[13px] mb-[20px]
                after:content-[''] after:block after:w-[30px] after:h-[1px] after:bg-[#888] after:mt-[13px] after:transition-all">{props.h2}</h2>
                <p className="text-[11px] font-noto mb-[8px] text-[#666]">{props.tag}</p>
                <p className="text-[13px] font-noto leading-[1.3] text-[#333] tracking-[1px]">
                    {props.p}</p>
            </div>
            </Link>

        </div>
    )
}

const Home = () => {

    const [swiperRef, setSwiperRef] = useState(null);
    
    const playSwiper = () => {
        console.log(swiperRef)
        swiperRef.autoplay.start();
    }
    const pauseSwiper = () => {
        swiperRef.autoplay.stop();
    }

    return(
        <div className="w-full h-screen overflow-hidden relative box-border bg-gradient-to-tr from-[#ac8bef] to-[#2ddbdc]">
            <h1 className="font-normal text-[24px] font-orbitron text-white tracking-[1px] absolute left-[50px] top-[70px]">
                UI/UX  
                <span className="opacity-80 ml-2">
                    PORTFOLIO
                </span>
            </h1>
            <ul className="absolute bottom-[60px] left-[60px] z-20">
                <li onClick={playSwiper} className="float-left mr-[20px] cursor-pointer text-white text-[20px] opacity-90 duration-500 transition-all hover:opacity-100 hover:scale-125"><FontAwesomeIcon icon={faPlay}/></li>
                <li onClick={pauseSwiper} className="float-left mr-[20px] cursor-pointer text-white text-[20px] opacity-90 duration-500  transition-all hover:opacity-100 hover:scale-125"><FontAwesomeIcon icon={faPause}/></li>
            </ul>
            <Swiper
                onSwiper={setSwiperRef}
                autoplay={{delay: 1000, disableOnInteraction: true}}
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next"
                }}
                speed={1000}
                slidesPerView="auto"
                centeredSlides={true}
                pagination={{ 
                    el: '.custom-pagination',
                    type: "fraction" }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: -100,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false
                  }}
                >
                {
                    HomeInfo.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Inner key={index} index={index+1} tag={item.tag} h2={item.h2} img={item.img} p={item.p} href={item.href}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-button-prev swiper-prev"/>
            <div className="swiper-button-next swiper-next"/>
            <div className="swiper-pagination custom-pagination"></div>
        </div>
    )
};

export default Home;

const HomeInfo = [
    {
        h2: "Online Profile Card",
        tag: "#REACT #TAILWINDCSS",
        p: "useState??? navigation??? ????????? ???????????? ??? ???????????? ????????? ??????????????? ????????? ?????????????????????.",
        img: "/img/home/1.gif",
        href: "/template-7"
    },
    {
        h2: "Company Webpage",
        tag: "#REACT #TAILWINDCSS",
        p: "??? ????????? Header, Field, Section, Footer??? ???????????? ?????????????????????.",
        img: "/img/home/2.gif",
        href: "/template-8"
    },
    {
        h2: "Village Animation",
        tag: "#REACT #TAILWINDCSS",
        p: "Tailwindcss??? ???????????? keyframe animation ?????????????????????.",
        img: "/img/home/3.gif",
        href: "/template-9"
    },
    {
        h2: "Panorama Company Intro",
        tag: "#REACT #TAILWINDCSS #TAILWINDCSS-LABELED-GROUP",
        p: "Tailwincss perspective plugin??? ???????????? transform style??? 3d??? ??????????????? ?????????????????????. tailwindcss-labeled-groups package??? ???????????? group??? ???????????? ???????????? ?????????????????????.",
        img: "/img/home/4.gif",
        href: "/template-10"
    },
    {
        h2: "Flex-based Video Webpage",
        tag: "#REACT #TAILWINDCSS",
        p: "Flex ???????????? ???????????? ????????? ???????????? ?????? ?????? before, after??? ???????????? hover effect ??????. ????????? ????????? ?????? ?????? ?????? z-index ?????? ?????????????????????.",
        img: "/img/home/5.jpg",
        href: "/template-11"
    },
    {
        h2: "Music Player",
        tag: "#REACT #TAILWINDCSS",
        p: "queryselector ??????????????? ????????? React?????? ???????????? useState??? ?????? ????????? ????????? ??? ?????? ????????? ?????????????????????. ",
        img: "/img/home/6.gif",
        href: "/template-12"
    },
    {
        h2: "Pinterest-style Responsive Web Gallery",
        tag: "#REACT #TAILWINDCSS #REACT-REPONSIVE-MASONRY",
        p: "Responsive Maxonary plugin ?????????????????????. Tailwindcss??? media query ?????????????????????.  ",
        img: "/img/home/7.jpg",
        href: "/template-13"
    },
]

const swiperElement = () => {
    return(
        <swiper-container
            inject-styles="true"
            space-between="0"
            slides-per-view={'auto'}
            grab-cursor="true"
            centered-slides="true"
            speed="1000"
            pagination = "true"
            pagination-type="fraction"
            navigation="true"
            direction="horizontal"
            effect="coverflow"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="-100"
            coverflow-effect-depth="400"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="false"
        >
            {
                HomeInfo.map((item, index) => (
                    <swiper-slide>
                        <Inner key={index} index={index+1} tag={item.tag} h2={item.h2} img={item.img} p={item.p}/>
                    </swiper-slide>
                ))
            } 
        </swiper-container>
    )
}