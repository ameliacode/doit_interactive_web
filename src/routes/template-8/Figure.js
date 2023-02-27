const Figure = () => {
    return(
        <figure className="w-full h-[calc(100vh-120px)] bg-black relative overflow-hidden pt-[250px]">
            <video className="object-cover w-full h-full opacity-30 absolute top-0 left-0" 
            src={"img/template-8/visual.mp4"} autoPlay muted loop/>
            <div className="max-w-6xl mx-auto realtive">
                <h1 className="font-normal text-[120px] text-white mb-[20px]">INNOVATION</h1>
                <p className="text-[16px] text-[#888] mb-[20px]">Sunt pariatur sit fugiat est ullamco. Excepteur elit incididunt sit officia incididunt ullamco dolor sint ad occaecat veniam ullamco. Cillum do duis ea aute ea consequat do in incididunt.</p>
                <a className="block w-[400px] h-[30px] border border-[#bbb] text-white font-bold text-center tracking-wide leading-7 duration-500  transition-all text-[15px]" href="#">view detail</a>
            </div>
        </figure>
    );
}

export default Figure;