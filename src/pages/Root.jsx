import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import { IoMoon, IoSunny } from "react-icons/io5";
import Footer from "../components/Footer/Footer";

export default function Root() {
        const [isDark, setIsDark] = useState(false);

        useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
            
            setIsDark(initialDark);
            document.documentElement.classList.toggle('dark', initialDark);
        }, []);

        ////to save the theme in local storage and add class dark when the dark value changes
        useEffect(() => {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', isDark);
        }, [isDark]);

        ///to toggle the theme
        const toggleTheme = () => {
            setIsDark(prev => !prev);
        };
        ////nav links
        const links = [
        {
            name:'Home',
            path:'#home'
        },
        {
            name:'About me',
            path:'#about'
        },
        {
            name:'Education',
            path:'#education'
        },
        {
            name:'Projects',
            path:'#projects'
        },
        {
            name:'Contact',
            path:'#contact'
        },
    ]
    return (
        <div>
            <Nav 
                name={'Sahar'}
                links={links}
                icon={isDark ? <IoSunny /> : <IoMoon />}
                onToggle={toggleTheme}
            />
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}
