
const MemberCard = (props) => {
    console.log(props)
    return(
    <div className="group-face3 w-full h-[253px] mb-[20px] border border-white/50 box-border bg-white/[0.06] p-[50px] realtive opacity-70 overflow-hidden cursor-pointer duration-500  transition-all hover:bg-white/[0.15] hover:opacity-100 hover:scale-[1.03]">
        <div className={`w-[120px] h-[120px] bg-[center_top] bg-no-repeat  rounded-full ${props.bg} overflow-hidden border border-white float-left relative top-[15px] bg-cover`}/>
        <div className="float-right w-[340px]">
            <h2 className="tracking-normal text-xl font-bold text-white transition-all duration-500 group-face3-hover:opacity-100 group-face3-hover:drop-shadow-[0px_0px_10px_rgba(0,255,255,1.0)] group-face3-hover:text-[#e0ffff]">
                {props.h2}
            </h2>
            <p className="text-[14px] tracking-normal font-roboto text-[#ddd] mt-[20px]">
                Here comes Member Information contents in detail. Here comes Member Information contents in detail.
            </p>
            <span className="text-[#0ff]/50 text-[12px] float-right">
                {props.span}
            </span>
        </div>
    </div>
    )
}

const Members = () => {
    return(
        <>
        { MemberInfo.map((item, index) => (
            <MemberCard key={index} index={index} bg={item.bg} h2={item.h2} span={item.span}/>
        ))}
        </>
    )
}

export default Members;

const MemberInfo = [
    {
        h2: "Member Information1",
        span: "2018-03-05",
        bg: "bg-member-1"
    },
    {
        h2: "Member Information2",
        span: "2018-06-18",
        bg: "bg-member-2"
    },
    {
        h2: "Member Information3",
        span: "2018-07-26",
        bg: "bg-member-3"
    },
]