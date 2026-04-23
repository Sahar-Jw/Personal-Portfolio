export default function Hero({name}) {
    
    return (
        <div id="home" className='hero h-[89vh] flex lg:items-center justify-between px-6 lg:px-17.5 relative mt-11 lg:mt-0'>
            <div className="text w-full lg:w-[40%] relative py-10">
                <div className="hero-bg-gradient absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[135%] w-[105%] h-[96%] -z-10 
                    bg-[radial-gradient(circle_at_35%_50%,#9BFFA5_-5%,#0E3186_26%,#C9D4EF_50%,#D798E1_28%,#CACFFA_0%)] 
                    blur-[100px] 
                    opacity-50">
                </div>
                <div className="relative z-10">
                    <h1 className='text-primary-text text-[38px] lg:text-[55px] font-bold leading-tight'>
                        <span className='font-normal'>HEY!</span> I'm {name}, Frontend Developer
                    </h1>
                    <p className='text-sec-text font-normal text-[18px] lg:mt-4 lg:mb-8 mt-8 mb-12'>
                        Agency-quality Webflow websites with the personal touch of a freelancer.
                    </p>
                    <a 
                        href="/assets/Sahar Jwar-cv.pdf" 
                        download="Sahar Jwar-cv.pdf"
                        className="cv w-38.75 h-12.5 px-7.5 py-4 bg-[#FFFFFF99] text-primary-text text-[15px] transition-colors cursor-pointer rounded-md hover:bg-white font-semibold"
                        >
                        Download CV
                    </a>
                </div>
            </div>
            <img src='assets/img/blue.png' alt="hero img" className='w-[50%] lg:inline hidden' />
        </div>
    )
}
