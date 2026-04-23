import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import SkillBars from "../components/SkillBars/SkillBars .jsx";
import Title from "../components/Title/Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import Form from "../components/Form/Form.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { useTheme } from "../hooks/useTheme.js";
import { projectData } from "../ProjectData.js";
import Timeline from "../components/Timeline/Timeline.jsx";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const isDark = useTheme();
    const sectionParter = isDark ? '/assets/img/dark.png' : '/assets/img/light.png';
    useEffect(() => {
    const handleScroll = () => {
        const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight * 0.95;
        setIsVisible(atBottom);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
    const experience = [
        {
            titles: [
                {
                    title: 'Experience Designer',
                    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
                },
                {
                    title: 'Frontend Developer',
                    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
                }
            ]
        },
        {
            titles: [
                {
                    title: 'Experience Designer',
                    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
                },
                {
                    title: 'Frontend Developer',
                    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
                }
            ]
        }
    ];
    const contact =[
        {
            icon: <FaPhoneAlt />,
            title:'Call me',
            subTitle:'+963 935 938 043'
        },
        {
            icon: <MdOutlineMail />,
            title:'Email me',
            subTitle:'saharjwar86@gmail.com'
        },
        {
            icon: <MdOutlineLocationOn />,
            title:'find me at',
            subTitle:'Syria, Damascus'
        }
    ]
    return (
        <div className="relative">
            <Hero 
                name="Sahar"
            />
            <main className="">
                <img src={sectionParter} alt="" />
                <Section sectionStyle="px-6 py-6 flex-col-reverse  lg:px-17.5 lg:pb-[125px] lg:pt-[50px] flex lg:flex-row justify-center text-center items-center lg:gap-20 gap-6" id="about">
                    {/* <img src="/assets/img/about.png" alt="about img" className="lg:w-[40%] md:w-[54%]" /> */}
                    <div className="flex flex-col w-full mb-3.5 ">
                        <Title
                            title={'About me'}
                            divStyle={'lg:mb-[25px] mb-[8px]'}
                            titleStyle={'lg:text-[38px] text-[24px] font-bold text-primary-text mb-[3px]'}
                            subTitleStyle={'lg:text-[17px] text-[14px] font-normal text-primary-text'}
                        />
                        <p className="lg:text-lg/10 text-sm/6 font-medium mb-4 text-primary-text">
                            Front-End Developer specializing in React.js with hands-on experience building scalable and responsive web applications, including e-commerce platforms and admin dashboards. Skilled in developing dynamic user interfaces, integrating RESTful APIs, and implementing authentication and full CRUD functionality.
                        </p>
                        <p className="lg:text-lg/10 text-sm/6 font-medium mb-4 text-primary-text">
                            Strong focus on responsive design, performance optimization, and delivering seamless user experiences. Experienced in working with modern frontend technologies and collaborating in team environments on real-world projects.
                        </p>
                        <p className="lg:text-lg/10 text-sm/6 font-medium text-primary-text">
                            Passionate about writing clean, maintainable code and continuously improving technical skills.
                        </p>
                        {/* <SkillBars /> */}
                    </div>
                </Section>
                <Section sectionStyle={'lg:px-17.5 px-6 lg:pb-[125px] pb-6 relative'} id="education">
                    {/* <img src="/assets/img/bg-right.svg" alt="" className="absolute -top-8 right-0 w-25 lg:w-fit" /> */}
                    <Title title="Education and Experience"
                        subTitle="Education & Experience"
                        divStyle="flex justify-center items-center flex-col lg:mb-[50px] mb-[24px]"
                        titleStyle="font-medium lg:text-[20px] text-[16px] text-main"
                        subTitleStyle="font-semibold lg:text-[40px] text-[25px] text-primary-text"
                    />
                    {/* <div className=" flex lg:flex-row flex-col mb-50.5 ">
                        {experience.map((e, index) => (
                        <Experience key={index}
                            titles={e.titles}
                        />
                    ))}
                    </div> */}
                    <Timeline/>
                    
                    {/* <img src="/assets/img/bg-left.svg" alt="" className="absolute lg:w-fit lg:bottom-112.75 lg:left-4 bottom-62.75 left-2 w-25" /> */}


                    {/* <div className="hidden xl:block w-[87%] left-19.75 -z-1  -rotate-2 top-141.25 transform: rotateZ(-2deg); h-93.75 bg-main rounded-4xl absolute"></div>
                    <div className=" bg-[url(/assets/img/try-me-bg.svg)] bg-no-repeat bg-top bg-sec-main flex lg:flex-row flex-col lg:mt-51.5  items-center lg:gap-40 gap-6 lg:px-34 lg:py-30 p-7 w-[97%] m-auto rounded-4xl -mt-31.25">
                        <Title title={'Try me out, risk free!'}
                        titleStyle={'text-white font-semibold lg:text-[48px] text-[22px] mb-[20px] lg:mb-0'}
                        subTitle={"If you're not happy with the design after the first draft,I'll refund your deposit, no questions asked"}
                        subTitleStyle={'lg:text-[20px] text-[14px] lg:font-bold text-white'}
                        />
                            <a href="#contact" className="lg:px-7.5 lg:py-3.5 p-3.5 text-white font-semibold text-[14px] flex gap-1 hover:bg-[#0c96e2c2] bg-main rounded-md items-center ">
                                Contact
                                <HiOutlineArrowRight/>
                            </a>
                    </div> */}
                </Section >
                <Section sectionStyle={'lg:px-17.5 px-6 lg:pb-[125px] pb-6'} id="projects">
                        <div className="flex justify-between items-center mb-12.5 ">
                            <Title 
                            title={'Portfolio'}
                            titleStyle={'font-medium lg:text-[20px] text-[16px] text-main'}
                            subTitle={'My Creative Works Latest'}
                            subTitleStyle={'font-semibold text-primary-text lg:text-[40px] text-[25px]'}
                            span={'Projects'}
                            spanStyle={'text-main ml-[10px]'}
                            divStyle={'w-[40%]'}/>
                            <a href="https://github.com/Sahar-Jw" className="lg:px-7.5 lg:py-3.25 p-4 text-white font-medium text-[14px] flex gap-1 hover:bg-[#0c96e2c2] bg-main rounded-md items-center ">
                                View Github 
                                <RiArrowRightUpLine />
                            </a>
                        </div>
                            <ProjectCard projectCards={projectData} divStyle={'lg:grid lg:grid-cols-3 grid snap-x snap-mandatory overflow-x-auto scrollbar-hide flex gap-6 pb-4 lg:gap-12.5'}/>
                </Section>
                <Section sectionStyle={'lg:px-17.5 px-6 lg:pb-[125px] pb-6'} id="contact">
                        <Title 
                            title={'Contact'}
                            titleStyle={'font-medium lg:text-[20px] text-[16px] text-main'}
                            subTitle={"Let's Discuss Your"}
                            subTitleStyle={'text-primary-text font-semibold lg:text-[40px] text-[25px]'}
                            span={'Project'}
                            spanStyle={'text-main ml-[10px]'}
                            divStyle={'lg:mb-[50px] mb-[30px]'}
                        />
                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className="flex flex-col lg:gap-12 gap-7 lg:w-[49%] mb-10 lg:mb-0">
                                {contact.map((cont,index) => {
                                    return(
                                        <div key={index} className=" flex gap-2.5" >
                                            <p className="bg-main text-white rounded-lg p-3.75  lg:text-[20px] text-[18px] ">
                                                {cont.icon}
                                            </p>
                                            <div className="flex flex-col ">
                                                <h2 className="text-placeholder font-normal text-[16px] font-inter ">
                                                    {cont.title}
                                                </h2>
                                                <p className="text-primary-text font-medium text-[16px] font-inter">
                                                    {cont.subTitle}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Form/>
                        </div>
                    
                </Section>
                <button onClick={scrollToTop} className={`absolute right-6.5 bottom-4.75 w-12.5  h-12.5 rounded-xl text-white bg-main hover:bg-[#0c96e2c2] cursor-pointer p-4 shadow-[0_6px_28px_1px_var(--tw-shadow-color,#a5a8b1)]
                            transition-all duration-500 ease-out transform${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'}`} >
                        <FaArrowUp />
                </button>
            </main> 
        </div>
    )
}