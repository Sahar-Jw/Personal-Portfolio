import React from 'react'

export default function Timeline () {
    const events = [
    { date: '2025 Dec – 2026 Apr', title: 'Front-End Developer Intern  ', desc: "at VICA WEB SOLUTION Developed responsive web interfaces using HTML, CSS, and JavaScript, React.js, Tailwind CSS, Axios, and bring any Figma design into Life, assisted in building and improving user interfaces for real client projects Collaborated with developers and designers to enhance user experience Gained hands-on experience working in a professional development environment Followed best practices in code structure and UI implementation " },
    { date: 'Jun 2023 – Sep 2023 ', title: 'Junior frontend Developer and WordPress publisher (Part Time) ', desc: 'Divvmen -Saudi Arabia (Remote), Developed and maintained responsive user interfaces, managed and published website content using WordPress, Updated product data and handled currency adjustments, collaborated with team members to improve usability and performance.  ' },
    { date: '2022 - 2023  ', title: 'DIPLOMA OF SOFTWARE ENGINEERING (DAMASCUS UNIVERSITY)  ', desc: 'the graduation project that I participated in got a high mark which was 92% ' },
    ];
    return (
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 lg:mb-3.5 mb-10">
      {/* Central Line */}
        <div className="absolute z-0 w-2 h-full bg-gray-200 shadow-md left-1/2 transform -translate-x-1/2"></div>

        {events.map((event, index) => (
            <div key={index} className={`relative z-10 flex items-center justify-between w-full mb-8 ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}>
            {/* 1. Empty space for the opposite side */}
            <div className="order-1 w-5/12"></div>

            {/* 2. Central Circle Marker */}
            <div className="z-20 flex items-center order-1 bg-main shadow-xl w-8 h-8 rounded-full">
                {/* <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1> */}
            </div>

            {/* 3. Content Card */}
            <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-1 font-bold text-gray-800 text-xl">{event.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                {event.date} — {event.desc}
                </p>
            </div>
            </div>
        ))}
    </div>
    )
}
