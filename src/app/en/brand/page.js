"use client";

import Image from "next/image";
import "./brand.css";

const stepsData = [
  {
    title: "Step 1: Brand Audit & Research",
    description:
      "Brand Audit & Research: I begin with a deep dive into the client&apos;s existing brand (if applicable), market competitors, and industry landscape. This phase includes analyzing brand assets, evaluating strengths and weaknesses, and identifying strategic opportunities for differentiation.",
    image: "/pics/images/step1.webp",
  },
  {
    title: "Step 2: Brand Strategy",
    description:
      "Brand Strategy: This is where I help define the brand&apos;s mission, vision, and values. I craft a unique positioning statement that clearly articulates how the brand stands out from competitors. Together, I establish a brand personality that resonates with the target audience.",
    image: "/pics/images/step2.webp",
  },
  {
    title: "Step 3: Target Audience & Personas",
    description:
      "Target Audience & Personas: I develop detailed audience profiles and personas based on research and insights. This ensures that every communication and design decision is tailored to resonate with the ideal customer, driving engagement and loyalty.",
    image: "/pics/images/step3.webp",
  },
  {
    title: "Step 4: Brand Messaging & Voice",
    description:
      "Brand Messaging & Voice: I establish a clear and consistent brand voice, key messages, and storytelling approach. This empowers the brand to connect authentically with its audience, building trust and recognition across every touchpoint.",
    image: "/pics/images/step4.webp",
  },
  {
    title: "Step 5: Visual Identity Blueprint",
    description:
      "Visual Identity Blueprint: I lay the foundation for the brand&apos;s visual identity by defining key elements like colors, typography, and logo direction. This blueprint ensures that the visuals reflect the brand&apos;s core values and positioning.",
    image: "/pics/images/step5.webp",
  },
];

export default function BrandSteps() {
    return (
        <div className="steps-container">
            <div className="title">
                <h1>Brand Foundation</h1>
                <p>
                    Brand Foundation is the essential strategic process that gives your brand meaning and direction. It starts by identifying your mission why you exist and your vision where you want to go. From there, I establish your core values, which define your culture and behavior both internally and externally. I craft your brand voice to reflect how you communicate with your audience, ensuring consistency across all touchpoints. I also develop your market positioning: how you differentiate from competitors and resonate with your target audience. This foundation serves as the north star for all branding, marketing, and design efforts, building trust and loyalty while setting the stage for sustainable growth.
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
                Visual Identity Blueprint: I lay the foundation for the brand&apos;s visual identity by defining key elements like colors, typography, and logo direction. This blueprint ensures that the visuals reflect the brand&apos;s core values and positioning.
            </p>
        </div>
    );
}
