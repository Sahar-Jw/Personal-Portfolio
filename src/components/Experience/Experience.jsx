import { useTheme } from "../../hooks/useTheme";
import Title from "../Title/Title";

export default function Experience({titles}) {
    const isDark = useTheme();
    const frame = isDark ? '/assets/img/dark-frame.png' : '/assets/img/light-frame.png';
    return (
        <div className="flex lg:flex-row lg:gap-10 gap-3.75 max-h-52 lg:h-fit mb-3.5 ">
            <img src={frame} alt="" className="lg:h-78.5! h-44.5 "/>
            <div className="flex flex-col lg:w-[66%] h-fit lg:gap-17.5 gap-6.25">
                {titles.map((title, index) => (
                    <Title key={index}
                        title={title.title}
                        subTitle={title.subTitle}
                        titleStyle="text-third-text lg:text-[25px] text-[18px] font-medium mb-[3px]"
                        subTitleStyle="lg:text-[16px] text-[14px] font-normal text-forth-text"
                    />
                ))}
            </div>
        </div>
    )
}
