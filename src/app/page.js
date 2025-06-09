"use client";

import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from 'next/image';

import "./globals.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, pagePath, index}) => {
  return(
    <div className="card" id={`card-${index + 1}`}>
      <a href={pagePath}>
        <div className="card-inner">
          <div className="card-content">
            <h1>{title}</h1>
            <p>{copy}</p><br/><br/>
            <p><b>Voir plus <span>&rarr;</span></b></p>
          </div>
          <div className="card-img">
            <Image src={`/pics/card-${index + 1}.gif`} alt={title} width={200} height={100} unoptimized/>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Home() {
  const cards = [
    {
      title: "Fondations de marque",
      copy: "Établir les bases solides de votre marque en définissant sa mission, sa vision et ses valeurs. Je vous aide à clarifier ce que vous représentez, à qui vous vous adressez et comment vous vous démarquez.",
      pagePath: '/fr/brand',
    },
    {
      title: "Identité visuelle",
      copy: "Créer une identité visuelle forte et mémorable qui exprime la personnalité unique de votre marque à travers des couleurs, des formes, des typographies et des symboles.",
      pagePath: '/fr/brand-ind',
    },
    {
      title: "Contenu pour les réseaux sociaux",
      copy: "Concevoir du contenu visuel attractif et engageant qui fait rayonner votre marque sur les réseaux sociaux et qui fidélise votre communauté.",
      pagePath: '/fr/cont-rs',
    },
    {
      title: "Design de produit",
      copy: "Concevoir des produits digitaux intuitifs et attractifs qui offrent une expérience utilisateur exceptionnelle et valorisent votre marque.",
      pagePath: '/fr/product-d',
    },
  ];

  const container = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    ScrollTrigger.create ({
      trigger: cards[0],
      start: "top 33%",
      endTrigger: cards[cards.length - 1],
      end: "top 30%",
      pin: ".ttl",
      pinSpacing: false,     
    });

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      const cardInner = card.querySelector(".card-inner");

      if (!isLastCard) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: ".outro",
          end: "top 65%",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) =>
      trigger.kill());
    }

  },
  { scope: container });

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="intro">
          <h1>Bienvenue chez SAPJAMES,</h1>
          <p>Je vous accompagne dans la création d&apos;identités de marque, grâce à une approche simple et efficace, je vous aide à valoriser votre entreprise et à toucher votre public cible de manière concrète.</p>
          <button>
            <a href="https://wa.me/message/DHICMCCPRFXFO1" target="_blank" rel="noopener noreferrer">
              <h3>Travaillons ensemble</h3>
            </a>
          </button>
        </section>
        <section className="ttl">
          <h2>Services et projets</h2>
        </section>
        <section className="cards">
          {cards.map((card, index) => (
              <Card key={index} {...card} index={index} />
          ))}
        </section>
        <section className="outro">
          <h1>Façonner des innovations intemporelles, là où l&apos;histoire rencontre demain.</h1>
          <button className="btn">
            <a href="https://wa.me/message/DHICMCCPRFXFO1" target="_blank" rel="noopener noreferrer">
              <h3>Travaillons ensemble</h3>
            </a>
          </button>
        </section>
      </div>
    </ReactLenis>
  );
}
