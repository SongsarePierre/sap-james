"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/pics/projets/ui/ui 1.webp",
      title: "Personal Portfolio Website for a UI/UX Designer",
      description: "A modern, responsive portfolio website crafted for a UI/UX designer, showcasing creativity, user-centered design, and an eye for detail. This project features an elegant homepage with a personalized hero section, an intuitive navigation bar, a project gallery highlighting case studies, and a contact form for easy communication.",
      figmaLink: 'https://www.figma.com/proto/SFpggilmBUYEGznsR1NiUD/PIERRE-Bleu?node-id=1-2&t=HMwWqMZRmpU0jHgA-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'
    },
    {
      src: "/pics/projets/ui/ui 2.webp",
      title: "Premium Ice Cubes & Custom Sculptures Business Website",
      description: "A dynamic e-commerce website created for a luxury brand specializing in premium ice cubes and bespoke ice sculptures. The site features an immersive homepage that invites customers to explore the three sizes of high-quality ice cubes, each with rounded edges designed to elevate every drink.",
      figmaLink: 'https://www.figma.com/proto/ytEhUDuyXiLCSGInxgrLh2/Eis-Noire?node-id=1-251&p=f&t=9oYrUqhstF9Iat2Q-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A251'
    },
    {
      src: "/pics/projets/ui/ui 3.webp",
      title: "Modern Development Agency Website",
      description: "A sleek, professional website for a digital agency that provides web and mobile development services. The homepage immediately captures attention with a bold hero section that conveys the agency’s expertise and commitment to delivering top-notch solutions.",
      figmaLink: 'https://www.figma.com/proto/ItZw3rZ1aEFmTK9p4zOMge/Fortibtech--Copy-?node-id=1-2&p=f&t=C3gLQhkCRAvEY2Uv-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'
    }
  ];

  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="stylesheet" href="product-d.css" />
      </Head>

      <div className="page-content">
        <div className="title">
          <h1>Product Design</h1>
          <p>
            Product Design is a multidisciplinary process that blends creativity, strategy, and technology to build products that truly resonate with your users. It begins with deep user research to understand their needs, pain points, and behaviors. I translate these insights into wireframes and prototypes, rapidly iterating to refine usability and functionality. Visual design brings the product to life, balancing aesthetic appeal with user experience. For digital products, I ensure that interfaces are intuitive and accessible, while for physical products, I consider ergonomics, materials, and sustainability. Testing and validation are continuous throughout the process, ensuring the final product not only meets but exceeds user expectations. By aligning every decision with your brand’s purpose, I create products that drive engagement, loyalty, and business success.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((item, index) => (
            <div key={index} className="gallery-item">
              <div onClick={() => setSelectedImage(item.src)}>
                <Image
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="gallery-image"
                />
              </div>
              <div className="image-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.figmaLink} target="_blank" rel="noopener noreferrer">
                  <button>View prototype  &#8599;</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                className="backdrop"
                onClick={() => setSelectedImage(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="modal-container"
                onClick={() => setSelectedImage(null)}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <motion.img
                  src={selectedImage}
                  alt="Selected"
                  className="modal-image"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
