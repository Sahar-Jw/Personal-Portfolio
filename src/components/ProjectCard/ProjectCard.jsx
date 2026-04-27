import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";

export default function ProjectCard({projectCards,style,divStyle}) {
    return (
        <>
        <div className={`${divStyle}`}>
        {projectCards.map((pCard) => {
            return(
                <div className={`projectCard snap-center shrink-0 w-full lg:w-auto ${style} group`}>
                    <NavLink to={`/projects/${pCard.id}`} className="block">
                        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                            <img src={pCard.src} alt={pCard.title} className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-lg" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex items-end p-6">
                                <span className="text-white font-semibold text-lg md:text-xl transform translate-y-4 -opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-black/30 px-4 py-2 rounded-md shadow-lg">
                                    Click here to see project details
                                </span>
                            </div>
                        </div>
                    </NavLink>
                    <div className="flex justify-between items-start p-4">
                        <Title
                            title={pCard.title}
                            subTitle={pCard.subTitle}
                            titleStyle={'text-primary-text font-semibold lg:text-[22px] text-[18px]'}
                            subTitleStyle={'text-primary-text font-normal lg:text-[14px] text-[13px]'}
                        />
                        <a href={pCard.demo} className="bg-main py-2 px-6 rounded-lg shadow-lg text-white font-semibold lg:text-[16px] text-[14px] cursor-pointer transition-all duration-300 ">
                            Demo
                        </a>
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}
