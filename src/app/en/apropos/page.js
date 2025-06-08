"use client";

import Image from "next/image";
import "./apro.css";

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>About</h1>
            </div>
            <div className="steps-wrapper">
                    <div className="step">
                        <div className="step-txt">
                            <p className="step-description">
                                <span className="name">Songsare Amdji pierre <span>@SAP JAMES</span></span><br/><br/>
                                I’m a passionate creative professional with a keen eye for detail and a commitment to excellence. With years of experience in brand creation, social media visual design, and product design, I bring a holistic approach to every project. My mission? To help businesses connect with their audience through design that’s not only beautiful but also strategic and purposeful.
                            </p>
                            <div className="line"></div>
                            <div className="info">
                                <h2 className="step-heading">Tools</h2>
                                <div className="tools">
                                    <div className="tools-in">
                                        <div className="tool">Adobe photoshop</div>
                                        <div className="tool">Adobe illustrator</div>
                                        <div className="tool">Adobe Indesign</div>
                                    </div>
                                    <div className="tools-in">
                                        <div className="tool">Adobe XD</div>
                                        <div className="tool">Figma</div>
                                        <div className="tool">DaVinci Resolve</div>
                                    </div>
                                </div>
                            </div>                                  
                        </div>
                        <div className="step-image">
                            <img src="/pics/images/pp.webp" alt=""/>
                        </div>
                    </div>
            </div>
        </div>
    );
}
