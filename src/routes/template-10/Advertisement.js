const Advertisement = () => {
    return(
        <>
        <div className="group-face4 mb-[20px] w-full h-[600px] border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
            <video className="w-full border border-white mb-[30px]"
            src="img/template-10/intro.mp4" autoPlay loop controls/>
            <h2 className="tracking-normal text-xl font-bold text-white duration-500 transition-all group-face4-hover:opacity-100 group-face4-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face4-hover:text-[#e0ffff]">
                Promotion
            </h2>
            <p className="font-noto leading-tight text-[12px] text-[#bbb] mt-[20px] ">
                Here comes Member Information contents in detail. 
                Here comes Member Information contents in detail.
                Here comes Member Information contents in detail. <br/><br/>
                Here comes Member Information contents in detail.
                Here comes Member Information contents in detail.
            </p>
        </div>
        <div className="group-face4-2 w-full h-[180px] border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500 transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
            <h2 className="tracking-normal text-xl font-bold text-white duration-500 transition-all duration-500  group-face4-2-hover:opacity-100 group-face4-2-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face4-2-hover:text-[#e0ffff]">
                Information
            </h2>
            <p className="float-left leading-tight  font-noto text-[12px] text-[#bbb] mt-[20px]">Here comes Text description</p>
            <em className="float-right text-[12px] text-[#ccc] mt-[23px]">2018.06.21</em>
        </div>
        </>
    );
}

export default Advertisement;