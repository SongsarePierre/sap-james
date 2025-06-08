"use client";

import Image from "next/image";
import "./ser.css";

const stepsData = [
  {
    title: "Brand creation",
    description:
      "Your brand is the first impression you make on your customers. It is not limited to a simple logo or name, but encompasses everything that makes your company recognisable and appreciated.",
    example: "I create professional logos and graphic charters (fonts, colours, symbols) that reflect your personality and values. This can include designing business cards, letterheads for your documents, and visuals for your social media so that your communication is consistent and memorable.",
    image: "/pics/card-2.gif",
  },
  {
    title: "Visuals for social media",
    description:
      "Social media has become essential for communicating with your audience. Well-designed posts help capture attention, increase visibility and build audience loyalty.",
    example: "I create attractive visuals for Instagram, Facebook, and LinkedIn: posts, stories, covers, infographics, and animations. Each visual is tailored to your brand and message to better tell your story and engage your followers.",
    image: "/pics/card-3.gif",
  },
  {
    title: "Product design",
    description:
      "Product design involves transforming an idea into an object or application that is easy to use and pleasing to the eye. This could be a website, a mobile app or even a physical object.",
    example: "If you have an idea for a mobile app (for example, an app to manage your appointments), I can help you create its interface: intuitive screens, clear buttons, harmonious colours and a simplified user experience, so that your customers can use it easily and enjoyably.",
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
                                    <p className="step-example"><b>Concrete example:</b><br/>{step.example}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
