const Footer = () =>{
    return (
        <footer className="w-full bg-[#333] py-[100px] border-t border-[#888]">
            <div className="w-[1180px] mx-auto">
                <div className="w-full border-b font-notos border-[#777] pb-[20px] after:block after:clear-both">
                    <h1 className="float-left font-bold text-[#666]">DCODELAB</h1>
                    <ul className="float-right">
                        <li className="float-left ml-[20px]"><a className="font-bold text-[#666]" href="#">Policy</a></li>
                        <li className="float-left ml-[20px]"><a className="font-bold text-[#666]" href="#">Terms</a></li>
                        <li className="float-left ml-[20px]"><a className="font-bold text-[#666]" href="#">Family Site</a></li>
                        <li className="float-left ml-[20px]"><a className="font-bold text-[#666]" href="#">Sitemap</a></li>
                    </ul>
                </div>
                <div className="w-full pt-[20px]">
                <address className="w-full text-[12px] text-[#777] mb-[20px] not-italic">
                    Lorem ipusm dolor sit amet consectetur adipisicing elit.Quas, facere. <br/>
                    TEL : 031-111-1234 C.P : 010-1234-5678
                </address>
                <p className="w-full text-[12px] text-[#777]">
                    2020 DCODELAB $copy; copyright all rights reserved.
                </p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;