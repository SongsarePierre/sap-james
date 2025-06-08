"use client";

import Image from "next/image";
import "./apro.css";

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>À-propos</h1>
            </div>
            <div className="steps-wrapper">
                    <div className="step">
                        <div className="step-txt">
                            <p className="step-description">
                                <span className="name">Songsare Amdji pierre <span>@SAP JAMES</span></span><br/><br/>
                                Je suis un créatif passionné, avec une solide expérience dans la conception de logos, de visuels pour les réseaux sociaux et de designs de produits numériques ou physiques. Mon objectif est de rendre votre communication plus simple, plus forte et plus efficace. J&apos;aime écouter vos besoins, comprendre vos idées et les transformer en designs qui parlent à vos clients. Grâce à mon approche pédagogique, je vous explique chaque étape du processus, pour que vous puissiez suivre et comprendre l&apos;avancement du projet.
                            </p>
                            <div className="line"></div>
                            <div className="info">
                                <h2 className="step-heading">Outils</h2>
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
                            <Image src="/pics/images/pp.webp" alt="..." width={200} height={100} />
                        </div>
                    </div>
            </div>
        </div>
    );
}
