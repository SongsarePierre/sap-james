"use client";

import React, {useState, useRef, useEffect} from 'react';
import Link from "next/link";

import "./lang-en.css";

const Langen = () => {
    return (
        <div className="lang-en">
            {/* <p>Language</p> */}
            <div className="options">
                <Link href="/">
                    <span className="fr">Fr</span>
                </Link>
                <a href="#">
                    <span className="en">En</span>
                </a>
            </div>
        </div>
    );
};

export default Langen;
