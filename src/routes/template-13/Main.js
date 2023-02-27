import LoremIpsum from "react-lorem-ipsum";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

const Photo = (props) => {
    return(
        <div className="transition-all duration-500 w-full h-full bg-[#fff] rounded-[4px] shadow-md box-border p-[14px]">
            <img className="w-full" 
            src={`img/template-13/p${props.index}.jpg`} alt=""/>
            <h2 className="mt-[15px] font-bold font-orbitron text-[11px] tracking-[1px] text-[#444] mb-[5px]">
                <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={1} startWithLoremIpsum={false}/></h2>
            <p className="font-noto text-[9px] text-[#777] mb-[15px]">
                <LoremIpsum avgSentencesPerParagraph={1} startWithLoremIpsum={false}/></p>
        </div>
    )
}

const Main = () => {
    const photos = Array(20).fill().map((_, index) => (
        <Photo key={index} index={index+1}/>
      ));
    const [show, setShow] = useState("all");
    
    const handleClick = (index) => {
        setShow(index)
    }

    useEffect(() => {

    }, [show]);
    
    return(
        <ResponsiveMasonry  
            columnsCountBreakPoints={{540: 1, 680: 2, 900: 3, 1200: 4, 1600: 5}}
            className="transition-all duration-500 2xl:ml-[400px] box-border p-[20px] min-h-screen h-full">
            <ul className="w-full flex mx-auto sm:block mb-[10px] sm:mx-[10px] after:block after:content-[''] after:clear-both">
                <li 
                onClick={()=>handleClick('all')}
                className="float-right mx-[10px] w-full sm:w-[100px] h-[26px]">
                    <a className={`${show==="all" ? "text-white bg-gradient-to-tr from-[#67faf3] to-[#58abf8] shadow-[0px_5px_20px_rgba(0,255,255,0.527)]":"text-[#aaa] bg-white"}
                     block w-full h-full text-[0.65rem] leading-6 font-bold font-orbitron 
                     tracking-[1px] text-center rounded-[5px] shadow-md `}
                    href="#">ALL</a></li>
                <li 
                onClick={()=>handleClick('odd')}
                className="float-right mx-[10px] w-full sm:w-[100px] h-[26px]">
                <a className={`${show==="odd" ? "text-white bg-gradient-to-tr from-[#67faf3] to-[#58abf8] shadow-[0px_5px_20px_rgba(0,255,255,0.527)]":"text-[#aaa] bg-white"}
                     block w-full h-full text-[0.65rem] leading-6 font-bold font-orbitron 
                     tracking-[1px] text-center rounded-[5px] shadow-md `}
                    href="#">ODD</a></li>
                <li 
                onClick={()=>handleClick('even')}
                className="float-right mx-[10px] w-full sm:w-[100px] h-[26px]">
                <a className={`${show==="even" ? "text-white bg-gradient-to-tr from-[#67faf3] to-[#58abf8] shadow-[0px_5px_20px_rgba(0,255,255,0.527)]":"text-[#aaa] bg-white"}
                     block w-full h-full text-[0.65rem] leading-6 font-bold font-orbitron 
                     tracking-[1px] text-center rounded-[5px] shadow-md `}
                    href="#">EVEN</a></li>
            </ul>
            <Masonry className="this w-full after:content-[''] afer:block after:clear-both"> 
            {photos
            .filter((_, index) => show === "odd" ? index % 2 !== 0 : show === "even" ? index % 2 === 0 : true)
            .map((photo, index) => (
                <article 
                className={`${index%2===0 ? "all even":"all odd"} transition-all duration-500 w-full float-left box-border p-[12px]`}
                key={index}>{photo}</article>
            ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default Main;