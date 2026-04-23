import { FaLongArrowAltLeft, FaExpand, FaTimes } from "react-icons/fa";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { useTheme } from "../hooks/useTheme";
import { projectData } from "../ProjectData";

export default function Projects() {
    const isDark = useTheme();
    const sectionParter = isDark ? '/assets/img/dark.png' : '/assets/img/light.png';
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3)
const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalRef = useRef(null);
    const sliderRef = useRef(null);
const containerRef = useRef(null);

        // Fix: Scroll to top on project change/navigation
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [id]);

        useEffect(() => {
            const handleResize = () => {
                if(window.innerWidth < 992){
                    setCardsToShow(1)
                }else{
                    setCardsToShow(3)
                }
            };

            handleResize();
            window.addEventListener("resize",handleResize);
            return () => window.removeEventListener("resize",handleResize);
        },[]);

        const next =() => {
            if(currentIndex < projectData.length - cardsToShow){
                setCurrentIndex(currentIndex + 1)
            }
        }

        const prev =() => {
            if(currentIndex > 0){
                setCurrentIndex(currentIndex - 1)
            }
        }

    const project = projectData.find(p => p.id === parseInt(id));
    
    if (!project) {
        return <div className=" py-31.25 text-primary-text bg-red-100 p-8 rounded-lg">Project not found: ID {id}</div>;
    }
    return (
        <>
        <div className="lg:px-17.5 lg:pt-22.5 lg:pb-17.5 px-6 py-6">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-8">
                <div className="relative group lg:w-[50%] rounded-lg overflow-hidden">
                    <img src={project.src} alt={project.title} className="w-full h-full block transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center gap-8 pointer-events-none group-hover:pointer-events-auto z-10">
                        <button 
                        onClick={() => setModalIsOpen(true)}
                        className="text-white text-3xl p-3 rounded-full hover:bg-white/40 transition-all duration-200 hover:scale-110"
                        title="Open fullscreen"
                        aria-label="Open image fullscreen"
                        >
                        <FaExpand />
                        </button>
                        <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-3xl p-3 rounded-full hover:bg-white/40 transition-all duration-200 hover:scale-110"
                        title="View demo"
                        >
                        <LuCircleArrowOutUpRight />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[50%]">
                <div className="lg:mb-5 mb-3.5 flex justify-between">
                    <div className="">
                        <h1 className="text-primary-text font-semibold lg:text-[28px] text-[18px]">
                            {project.title}
                        </h1>
                        <p className="text-[#A6A6A6] font-medium lg:text-[14px] text-[13px]">
                            {project.date}
                        </p>
                    </div>
                    <a href={project.demo}>
                        <LuCircleArrowOutUpRight className="text-main lg:text-[30px] text-[24px]"/>
                    </a>
                </div>
                <p className="text-primary-text lg:text-[18px] text-[14px] lg:mb-4.5 mb-3">{project.desc}</p>
                <p className="font-medium text-primary-text lg:text-[18px] lg:mb-3 text-[14px] mb-2">
                    Basic Languages : 
                        <span className="font-normal ml-2.5">
                            {project.lang}
                        </span>
                </p>
                {project.framework && (
                    <p className="font-medium text-primary-text lg:text-[18px] lg:mb-3 text-[14px] mb-2">
                    Framework : 
                    <span className="font-normal ml-2.5">
                        {project.frameWork}
                    </span>
                </p>
                )}
                {project.lib && (
                    <p className="font-medium text-primary-text lg:text-[18px] lg:mb-3 text-[14px] mb-2">
                    Libraries : 
                    <span className="font-normal ml-2.5">
                        {project.lib}
                    </span>
                </p>
                )}
                <div className=" flex gap-3">
                    <a href={project.repo} className="w-fit lg:px-5.5 lg:py-3.25 px-3 py-2 text-[14px] lg:text-[16px] text-white font-medium bg-main rounded-lg hover:bg-[#0c96e2c2] transition-all">
                        Github Repo
                    </a>
                    <button 
                        onClick={() => navigate('/')} 
                        className="flex items-center gap-2.5 cursor-pointer w-fit lg:px-5.5 lg:py-3.25 px-3 py-2 text-[14px] lg:text-[16px] text-main font-medium border-2 border-main rounded-lg hover:bg-main hover:text-white transition-all"
                    >
                    <FaLongArrowAltLeft /> Back to Home
                    </button>
                </div>
                </div>
            </div>
        </div>
        <img src={sectionParter} alt="section parter img" />
        <Section sectionStyle={'lg:px-17.5 lg:py-[80px] p-6'}>
            <div className="flex justify-between items-end mb-14">
                <Title 
                    title={'Portfolio'}
                    titleStyle={'text-main lg:text-[20px] text-[16px] font-medium'}
                    subTitle={'The Best'}
                    subTitleStyle={'font-semibold text-primary-text lg:text-[40px] text-[25px]'}
                    span={'Projects'}
                    spanStyle={'text-main ml-[10px]'}
                />
                <div className="flex gap-2">
                    <button 
                        onClick={prev}
                        disabled={currentIndex === 0}
                    className={`text-white lg:text-[24px] text-[18px] rounded-[50%] lg:p-3 p-1.5 cursor-pointer border-2 border-main transition-all ${currentIndex === 0 ? 'bg-transparent  text-[#A6A6A6]! cursor-not-allowed!' : 'bg-main hover:bg-[#0c96e2c2]'}`}
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    <button 
                        onClick={next}
                        disabled={currentIndex >= projectData.length - cardsToShow}
                        className={`text-white lg:text-[24px] text-[18px] rounded-[50%] lg:p-3 p-1.5 cursor-pointer border-2 border-main transition-all ${currentIndex >= projectData.length - cardsToShow ? 'bg-transparent text-[#A6A6A6]! cursor-not-allowed!' : 'bg-main hover:bg-[#0c96e2c2]'}`}
                        >
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
                <div ref={containerRef} className="overflow-hidden ">
                    <div 
                        ref={sliderRef}
                        className="slider flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                    >
                        <ProjectCard projectCards={projectData} divStyle={`flex gap-[${18 / cardsToShow}px] lg:gap-4.5 w-[100%]`} style={`flex-shrink-0 w-full basis-[calc(100%/${cardsToShow})] flex flex-col gap-8`}/>
                    </div>
                </div>
        </Section>
        
        {modalIsOpen && (
            <div 
                className="fixed inset-0 bg-black/90 z-100 flex items-center justify-center p-4 animate-fadeIn"
                onClick={(e) => {
                if (e.target === e.currentTarget) setModalIsOpen(false);
                }}
            >
                <div ref={modalRef} className="relative w-[90%] max-w-[95vw] h-[70vh] max-h-[95vh] bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center shadow-2xl">
                <button
                    onClick={() => setModalIsOpen(false)}
                    className="absolute top-4 right-4 text-white text-2xl p-2 rounded-full hover:bg-white/30 transition-all z-10 cursor-pointer"
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>
                <img 
                src={project.src} 
                alt={project.title} 
                className="max-w-full max-h-[90vh] h-full object-contain rounded-xl shadow-2xl"
                />
                </div>
            </div>
        )}
        </>
    );
}
