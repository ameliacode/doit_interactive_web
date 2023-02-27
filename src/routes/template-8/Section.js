
const NewsCard = (props) => {
    console.log(props)
    return(
        <article className={`w-[280px float-left ${props.key==="3" ? 'mr-0' : 'mr-[20px]'}`}>
            <div className="w-full h-[120px] bg-[#333] mb-[15px] relative overflow-hidden">
                <img className="object-cover w-full h-full+" src={props.img} alt={props.alt}/>
            </div>
            <h2 className="mb-[10px] font-noto">
                <a className="font-bold text-[#555] text-[16px]" href="#">Lorem ipsum dolor sit.</a></h2>
                <p className="text-[14px] text-[#777]">
                    Laboris dolore laboris et esse sint commodo voluptate dolor. Sit sint cupidatat adipisicing cillum. 
                </p>
        </article>
    )
}


const Section = () => {
    return(
        <section className="w-full py-[200px]">
            <div className="w-[1180px] mx-auto">
                <h1 className="font-bold text-[#555] text-center mb-[50px] text-[24px]">RECENT NEWS</h1>
                <div className="w-full flex flex-rows">
                {
                    NewsInfo.map((item, index) => {
                        return <NewsCard key={index} img={item.img} alt={item.alt} />
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Section;

const NewsInfo = [
    {
        img: "img/template-8/news1.jpg",
        alt: "1번째 콘텐츠 이미지"
    },
    {
        img: "img/template-8/news2.jpg",
        alt: "2번째 콘텐츠 이미지"
    },
    {
        img: "img/template-8/news3.jpg",
        alt: "3번째 콘텐츠 이미지"
    },
    {
        img: "img/template-8/news4.jpg",
        alt: "4번째 콘텐츠 이미지"
    }
]
