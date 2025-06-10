"use client";

import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from 'next/image';

import "./home-en.css";

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
            <p><b>View more<span>&rarr;</span></b></p>
          </div>
          <div className="card-img">
            <Image src={`/pics/card-${index + 1}.gif`} alt={title} width={200} height={100} />
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Home() {
  const cards = [
    {
      title: "Brand Foundation",
      copy: "Laying the strategic groundwork that defines who your brand is and what it stands for, guiding every design and communication decision. It&apos;s the compass that ensures your brand is aligned with your audience and goals.",
      pagePath: '/en/brand',
    },
    {
      title: "Visual identity",
      copy: "The unique visual and creative system that shapes how your audience perceives and remembers your brand, from the first glance to every interaction. It&apos;s the bridge that connects your strategy to your audience&apos;s emotions.",
      pagePath: '/en/brand-ind',
    },
    {
      title: "Visual Content Creation for Social Media",
      copy: "Crafting visually compelling and on-brand content that captivates, engages, and grows your audience across all social media platforms. From eye-catching graphics to memorable visuals, it&apos;s about making every post unforgettable.",
      pagePath: '/en/cont-rs',
    },
    {
      title: "Design de produit",
      copy: "Designing intuitive, beautiful, and functional products that solve real user problems and strengthen your brand&apos;s value. It&apos;s about transforming ideas into experiences that users love.",
      pagePath: '/en/product-d',
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
      <div className="lang">
        <p>Language</p>
        <div className="options">
          <span className="fr">Fr</span>
          <span className="fr">En</span>
        </div>
      </div>
      <div className="app" ref={container}>
        <section className="intro">
          <h1>Welcome to SAP JAMES,</h1>
          <p>I will guide you through the process of creating brand identities using a simple and effective approach, helping you to promote your business and reach your target audience in a meaningful way.</p>
          <button>
            <a href="https://wa.me/message/DHICMCCPRFXFO1" target="_blank" rel="noopener noreferrer">
              <h3>Let&apos;s Work Together</h3>
            </a>
          </button>
        </section>
        <section className="ttl">
          <h2>Services and projects</h2>
        </section>
        <section className="cards">
          {cards.map((card, index) => (
              <Card key={index} {...card} index={index} />
          ))}
        </section>
        <section className="outro">
          <h1>Shaping timeless innovations, where history meets tomorrow.</h1>
          <button className="btn">
            <a href="https://wa.me/message/DHICMCCPRFXFO1" target="_blank" rel="noopener noreferrer">
              <h3>Let&apos;s Work Together</h3>
            </a>
          </button>
        </section>
      </div>
    </ReactLenis>
  );
}
