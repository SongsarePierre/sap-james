"use client";

import Image from "next/image";
import "./contact.css";

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>Contact</h1>
            </div>
            <div className="steps-wrapper">
                    <div className="step">
                        <div className="step-txt">
                            <div className="txt">
                                <h2>
                                    Ready to bring your brand to life? Let’s connect!
                                </h2>
                                <p>
                                    <b>Email: </b>sapjames77@gmail.com<br/>
                                    <b>Téléphone: </b>+237 692 36 76 51<br/>
                                </p>
                            </div>
                            <div className="line"></div>
                            <div className="links">
                                <a href={"#"} target="_blank" rel="noopener noreferrer">Facebook &#8599;</a>
                                <a href={"#"} target="_blank" rel="noopener noreferrer">Instagram &#8599;</a>
                                <a href={"#"} target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
                                <a href={"#"} target="_blank" rel="noopener noreferrer">Behance &#8599;</a>
                                <a href={"#"} target="_blank" rel="noopener noreferrer">X &#8599;</a>
                            </div>
                            <div className="line"></div>
                            <p>
                                I’m excited to learn more about your project and explore how we can create something exceptional together.
                            </p>                                 
                        </div>
                    </div>
            </div>
        </div>
    );
}
