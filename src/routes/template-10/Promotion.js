const Promotion = () => {
    return(
        <div className="w-full h-full border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500 transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
            <div className="w-full h-full relative overflow-hidden border border-[#aaa] box-border">
                <video className="w-full h-full opacity-90 object-cover"
                src="img/template-10/loop.mp4" autoPlay loop muted/>
                <img className="absolute bottom-0 right-0" src="img/template-10/txt2.png"/>
                <img className="absolute bottom-[85px] right-[-18px] w-[90%]" src="img/template-10/line.png"/>
                <h2 className="absolute top-[140px] left-[50px] text-[40px] text-white text-left leading-[1.1] drop-shadow-[2px_2px_5px_#555] z-index-20"
                >Promote <br/>Your <br/> Company</h2>
            </div>
        </div>
    )
}

export default Promotion;