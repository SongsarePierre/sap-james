"use client";

import React, {useState, useRef, useEffect} from 'react';
import Link from "next/link";

import "./lang-fr.css";

const Lang = () => {
    return (
        <div className="lang">
            {/* <p>Language</p> */}
            <div className="options">
                <a href="#">
                    <span className="fr">Fr</span>
                </a>
                <a href="/home-en">
                    <span className="en">En</span>
                </a>
            </div>
        </div>
    );
};

export default Lang;
