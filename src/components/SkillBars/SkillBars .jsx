
import { useState } from 'react';

export default function SkillBars () {
    const skills = [
        { id: 1, name: "HTML5", level: 97 },
        { id: 2, name: "CSS3", level: 95 },
        { id: 3, name: "Javascript", level: 95 },
        { id: 4, name: "React", level: 87 },
    ]
    

    return (
        <div className="w-ful font-sans">

        <div className="lg:space-y-12 space-y-7">
            {skills.map((skill) => (
            <div key={skill.id} className="relative group">
                <label className="block lg:text-[20px] text-[16px] font-semibold text-primary-text mb-1.25">
                {skill.name}
                </label>

                <div className="relative flex items-center">
                <div 
                    className="absolute -top-10 flex flex-col items-center -translate-x-1/2 pointer-events-none transition-all duration-75"
                    style={{ left: `${skill.level}%` }}
                >
                    <div className="bg-[#00aaff] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm relative">
                    {skill.level}%
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00aaff] rotate-45" />
                    </div>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-runnable-track]:rounded-full
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-[#00aaff]
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:relative
                    [&::-webkit-slider-thumb]:z-20"
                    style={{
                    background: `linear-gradient(to right, #00aaff ${skill.level}%, #e5e7eb ${skill.level}%)`
                    }}
                />
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}
