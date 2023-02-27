const DcodeLab = () => {
    return(
        <div className="group-face5 w-full h-full border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
            <img className="mb-[40px]"src="img/template-10/tit.png"/>
            <div className="w-full h-[250px] border border-[#bbb] box-border bg-black/30 bg-robot bg-no-repeat bg-[center_center] bg-cover mb-[50px]"/>
            <img className="mb-[40px]"  src="img/template-10/txt.png"/>
            <img className="mb-[40px]" src="img/template-10/btn.png"/>
            <img className="mb-[40px] absolute top-full opacity-0 group-face5-hover:opacity-100 right-0 transition-all duration-500 group-face5-hover:top-[-40%]" src="img/template-10/reflect.png"/>
        </div>
    )
}

export default DcodeLab;