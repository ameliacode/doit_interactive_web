const Template9 = () => {
    return(
        <div className="w-full h-screen overflow-hidden animate-sky flex">
            <h1 className="animate-day w-full font-poiret-one text-white text-[92px] absolute text-center mx-auto top-[70%]">
                Have a Good Day!!
            </h1>
            <section className="absolute w-[1000px] h-[400px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-70%]">
                <article className="w-full h-full">
                    <img className="animate-sun absolute top-[-150px] left-1/2 ml-[-100px] origin-[center_500px]" src="img/template-9/sun.png"/>
                    <img className="animate-cloud1 absolute top-[-30px] left-[10%]" src="img/template-9/cloud1.png"/>
                    <img className="animate-flow absolute top-[20px]" src="img/template-9/cloud2.png"/>
                </article>
                <article>
                    <img className="animate-rotation absolute bottom-[104px] left-[50%] ml-[-165px] opacity-70" src="img/template-9/circle.png"/>
                    <img className="absolute bottom-0 left-[40px]" src="img/template-9/town_night.png"/>
                    <img className="animate-day absolute bottom-0 left-[40px]" src="img/template-9/town_day.png"/>
                </article>
                <article className="animate-day absolute w-full h-full top-0 bottom-0">
                    <img className="animate-man absolute left-0 bottom-0" src ="img/template-9/man.png"/>
                    <img className="animate-flow absolute left-0 bottom-0" src ="img/template-9/family.png"/>
                </article>
            </section>
        </div>
    );
}

export default Template9;