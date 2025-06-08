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
                                    Vous avez un projet? Parlons-en!
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
                                Je suis disponible pour discuter de vos besoins et vous accompagner pas à pas pour transformer vos idées en réalisations concrètes. Ensemble, créons quelque chose d’unique et d’impactant.
                            </p>                                 
                        </div>
                    </div>
            </div>
        </div>
    );
}
