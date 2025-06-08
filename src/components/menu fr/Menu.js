"use client";

import React, {useState, useRef, useEffect} from 'react';
import Link from "next/link";

import "./menu.css";
import LanguageSwitcher from '../LanguageSwitcher';

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const menuLinks = [
    { path: "/", label: "Accueil" },
    { path: "/fr/ser", label: "Services" },
    { path: "/fr/apropos", label: "À-propos" },
    { path: "/fr/contact", label: "Contact" },
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useGSAP(
        () => {
            gsap.set(".menu-link-item-holder", { y: 75 });

            tl.current = gsap
                .timeline({ paused: true })
                .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
        }, 
        { scope: container }
    );

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/"><img src="/pics/logo/lo 1.webp" alt=""/></Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        
                        <Link href="/"><img src="/pics/logo/lo 2.webp" alt=""/></Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Fermer</p>
                    </div>
                    
                </div>
                
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className="menu-link">
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-close-icon" onClick={toggleMenu}>
                            <p>&#x2715;</p>
                        </div>
                        <div className="menu-info-col-1">
                            <a href={"#"} target="_blank" rel="noopener noreferrer">Facebook &#8599;</a>
                            <a href={"#"} target="_blank" rel="noopener noreferrer">Instagram &#8599;</a>
                            <a href={"#"} target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
                            <a href={"#"} target="_blank" rel="noopener noreferrer">Behance &#8599;</a>
                            <a href={"#"} target="_blank" rel="noopener noreferrer">X &#8599;</a>
                        </div>
                        <div className="menu-info-col-2">
                            <p>sapjames77@gmail.com</p>
                            <p>+237 692 36 76 51</p>
                        </div>
                    </div>
                </div>
                {/* <div className="menu-preview">
                    <p>View Showreal</p>
                </div> */}
            </div>
        </div>
    );
};

export default Menu;
