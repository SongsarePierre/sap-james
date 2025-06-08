"use client";

import Image from "next/image";
import "./ser.css";

const stepsData = [
  {
    title: "Création de marque",
    description:
      "Votre marque, c&apos;est la première impression que vous laissez à vos clients. Cela ne se limite pas à un simple logo ou à un nom, mais englobe tout ce qui permet à votre entreprise d&apos;être reconnue et appréciée.",
    example: "Je crée des logos professionnels et des chartes graphiques (polices, couleurs, symboles) qui reflètent votre personnalité et vos valeurs. Cela peut inclure la conception de cartes de visite, d&apos;en-têtes pour vos documents, et de visuels pour vos réseaux sociaux afin que votre communication soit uniforme et mémorable.",
    image: "/pics/card-2.gif",
  },
  {
    title: "Visuels pour les réseaux sociaux",
    description:
      "Les réseaux sociaux sont devenus essentiels pour communiquer avec votre public. Des publications bien conçues permettent de capter l&apos;attention, de gagner en visibilité et de fidéliser votre audience.",
    example: "Je réalise des visuels attractifs pour Instagram, Facebook ou LinkedIn: posts, stories, couvertures, infographies ou animations. Chaque visuel est adapté à votre marque et à votre message, pour mieux raconter votre histoire et susciter l&apos;engagement de vos abonnés.",
    image: "/pics/card-3.gif",
  },
  {
    title: "Design de produit",
    description:
      "Le design de produit consiste à transformer une idée en un objet ou une application facile à utiliser et agréable à regarder. Cela peut concerner un site web, une application mobile ou même un objet physique.",
    example: "Si vous avez une idée d&apos;application mobile (par exemple, une appli pour gérer vos rendez-vous), je vous aide à créer son interface: écrans intuitifs, boutons clairs, couleurs harmonieuses et parcours utilisateur simplifié, afin que vos clients puissent l&apos;utiliser sans difficulté et avec plaisir.",
    image: "/pics/card-4.gif",
  },
];

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>Services</h1>
            </div>
            <div className="steps-wrapper">
                {stepsData.map((step, index) => (
                    <div key={index} className="step">
                        <div className="step-content">
                            <h2 className="step-heading">{step.title}</h2>
                            <div className="desc-im">
                                <div className="step-image">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={400}
                                        height={250}
                                        priority
                                    />
                                </div>
                                <div className="step-txt">
                                    <p className="step-description">{step.description}</p>
                                    <p className="step-example"><b>Exemple concret:</b><br/>{step.example}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
