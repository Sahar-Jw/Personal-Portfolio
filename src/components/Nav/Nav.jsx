import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Mainbtn from "../Mainbtn/Mainbtn"
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Nav({name,links,icon,onToggle}) {
    const location = useLocation();
    const hideNav = location.pathname.startsWith('/projects');
    const [activeLink, setActiveLink] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 80;

            if (window.scrollY < 50) {
                setActiveLink('Home');
                return;
            }

            const sections = links
                .map(link => ({ link, element: document.querySelector(link.path) }))
                .filter(item => item.element);

            for (let i = sections.length - 1; i >= 0; i--) {
                const { link, element } = sections[i];
                if (element.offsetTop <= scrollPosition) {
                    setActiveLink(link.name);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [links]);

    const handleLinkClick = (e, linkName, linkPath) => {
        e.preventDefault();
        setActiveLink(linkName);
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const target = document.querySelector(linkPath);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeMobileMenu();
        }
    };

    const handleToggleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onToggle) onToggle();
    };

    return (
        <>
            <nav className="sticky bg-bg-primary/95 backdrop-blur-md border-b border-[hsla(0,0%,100%,.1)] dark:border-[hsla(0,0%,0%,.1)] z-9999 top-0 w-full h-16 flex items-center justify-between px-6 lg:px-17.5 ">
                <h1 className="text-2xl font-semibold text-primary-text">
                    {name}
                </h1>
                
                <ul className={`hidden lg:flex ${hideNav ? 'hidden lg:hidden' : ''} list-none gap-6 items-center`}>
                    {links.map((link, index) => {
                        const isActive = activeLink === link.name;
                        return(
                            <li key={index} className="text-base font-medium cursor-pointer">
                                <a 
                                    href={link.path}
                                    onClick={(e) => handleLinkClick(e, link.name, link.path)}
                                    className={`transition-colors duration-300 ${isActive ? 'text-main' : 'text-primary-text hover:text-main'}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className=" flex gap-5">

                <button className={`text-primary-text text-xl cursor-pointer `} onClick={handleToggleClick}>
                    {icon}
                </button>
                <button 
                    className={`lg:hidden text-2xl text-primary-text cursor-pointer p-2 ${hideNav ? 'hidden lg:hidden' : ''}`} 
                    onClick={toggleMobileMenu}
                >
                    <HiMenuAlt3 />
                </button>
                </div>
            </nav>

            { isMobileMenuOpen && (
                <>
                    <div 
                        className="fixed inset-0 backdrop-blur-sm z-10000 lg:hidden"
                        onClick={handleOverlayClick}
                    />
                    <div className="fixed right-0 top-0 h-full w-80 bg-bg-primary z-10001 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl">
                        <div className="flex justify-end p-6">
                            <button 
                                className="text-2xl text-primary-text cursor-pointer p-2 hover:text-main" 
                                onClick={closeMobileMenu}
                            >
                                <HiX />
                            </button>
                        </div>
                        <ul className="flex flex-col items-center gap-8 py-8 px-6">
                            {links.map((link, index) => {
                                const isActive = activeLink === link.name;
                                return (
                                    <li key={index} className="w-full text-center">
                                        <a 
                                            href={link.path}
                                            onClick={(e) => handleLinkClick(e, link.name, link.path)}
                                            className={`block py-3 px-6 text-xl font-medium transition-colors duration-300 rounded-lg w-full ${
                                                isActive 
                                                    ? 'text-main bg-main/10' 
                                                    : 'text-primary-text hover:text-main hover:bg-main/5'
                                            }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}
