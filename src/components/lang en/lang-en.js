"use client";

import React, {useState, useRef, useEffect} from 'react';
import Link from "next/link";

import "./lang-en.css";

const Langen = () => {
    return (
        <div className="lang-en">
            {/* <p>Language</p> */}
            <div className="options">
                <a href="/">
                    <span className="fr">Fr</span>
                </a>
                <a href="#">
                    <span className="en">En</span>
                </a>
            </div>
        </div>
    );
};

export default Langen;
