
const Header = () => {
    return (
        <header className="w-full border-b-[1px] border-[#ddd]">
            <div className="w-[1180px] h-[120px] mx-auto relative">
                <h1 className="absolute left-0 bottom-[15px]"> 
                    <a className="font-bold text-[24px] text-[#444]" href="#">DCODELAB</a>
                </h1>
                <ul className="absolute bottom-[15px] right-0">
                    <li className="float-left">
                        <a className="font-bold text-[#555] py-[20px] px-[40px] duration-500 transition-all duration-50 hover:bg-[#555] hover:text-white" href="#">DEPARTMENT</a>
                        <a className="font-bold text-[#555] py-[20px] px-[40px] duration-500 transition-all duration-50 hover:bg-[#555] hover:text-white" href="#">GALLERY</a>
                        <a className="font-bold text-[#555] py-[20px] px-[40px] duration-500 transition-all duration-50 hover:bg-[#555] hover:text-white" href="#">YOUTUBE</a>
                        <a className="font-bold text-[#555] py-[20px] px-[40px] duration-500 transition-all duration-50 hover:bg-[#555] hover:text-white"  href="#">COMMUNITY</a>
                        <a className="font-bold text-[#555] py-[20px] px-[40px] duration-500 transition-all duration-50 hover:bg-[#555] hover:text-white" href="#">LOCATION</a>
                    </li>
                </ul>
                <ul className="absolute top-[20px] right-[30px]">
                    <li className="float-left">
                        <a className="inline-block text-[12px] text-[#999] px-[10px]" href="#">Contact</a>
                        <a className="inline-block text-[12px] text-[#999] px-[10px]" href="#">Help</a>
                        <a className="inline-block text-[12px] text-[#999] px-[10px]" href="#">Login</a>
                        <a className="inline-block text-[12px] text-[#999] px-[10px]" href="#">Join</a>
                        <a className="inline-block text-[12px] text-[#999] px-[10px]" href="#">Sitemap</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;