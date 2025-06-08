"use client";

import Image from "next/image";
import "./brand.css";

const stepsData = [
  {
    title: "Étape 1: Audit et Recherche",
    description:
      "Analyse approfondie de l&apos;existant: étude des éléments visuels, analyse concurrentielle, tendances du marché, et évaluation des points forts et des axes d&apos;amélioration. Cela permet de dresser un diagnostic précis et objectif de la marque.",
    image: "/pics/images/step1.webp",
  },
  {
    title: "Étape 2: Stratégie de Marque",
    description:
      "Définition des valeurs, de la mission et de la vision de la marque. C&apos;est à ce stade que l&apos;on pose les bases stratégiques qui guideront toutes les actions de communication et de design à venir.",
    image: "/pics/images/step2.webp",
  },
  {
    title: "Étape 3: Ciblage et Personas",
    description:
      "Identification et description détaillée du public cible. Création de personas pour mieux comprendre les besoins, les attentes et les comportements des clients potentiels afin de concevoir une communication efficace et pertinente.",
    image: "/pics/images/step3.webp",
  },
  {
    title: "Étape 4: Message et Ton de Voix",
    description:
      "Élaboration du discours de marque: définition du ton à adopter et des messages clés à transmettre. Cette étape garantit la cohérence et la pertinence des prises de parole sur l&apos;ensemble des supports de communication.",
    image: "/pics/images/step4.webp",
  },
  {
    title: "Étape 5: Identité Visuelle",
    description:
      "Création des éléments graphiques fondamentaux: logo, couleurs, typographies, iconographie et styles visuels. Cette étape permet de donner vie à la marque de façon distinctive et mémorable.",
    image: "/pics/images/step5.webp",
  },
];

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>Fondations d&apos;une marque</h1>
                <p>
                    Le fondement de marque est l&apos;étape essentielle où nous définissons l&apos;ADN même de votre entreprise. Je travaille avec vous pour identifier vos valeurs, votre mission et votre vision afin de bâtir une histoire cohérente et percutante. J&apos;analyse votre marché cible et votre positionnement pour mieux comprendre comment vous différencier dans votre secteur. Ce processus inclut également l&apos;élaboration d&apos;un message clé et la création d&apos;une stratégie qui guide toutes les actions de communication et de marketing. Un fondement solide donne à votre marque la crédibilité et la cohérence nécessaires pour prospérer sur le long terme.
                </p>
            </div>
            <div className="steps-wrapper">
                {stepsData.map((step, index) => (
                    <div key={index} className="step">
                        <div className="circl-line">
                            <div className="step-circle">{index + 1}</div>
                            {index < stepsData.length - 1 && (
                                <div className="step-line"></div>
                            )}
                        </div>
                        <div className="step-content">
                            <h2 className="step-heading">{step.title}</h2>
                            <div className="desc-im">
                                <div className="step-image">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={400}
                                        height={250}
                                    />
                                </div>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="last-p">
                Une fois toutes ces étapes réalisées, la marque est prête à rayonner avec une identité forte, des messages cohérents et une stratégie bien définie. Cela constitue un socle solide pour toutes les actions futures de communication et de marketing.
            </p>
        </div>
    );
}
