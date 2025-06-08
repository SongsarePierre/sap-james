"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./brand-ind.css";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pics/projets/logo mockup/m-1.webp",
    "/pics/projets/logo mockup/m-2.webp",
    "/pics/projets/logo mockup/m-3.webp",
    "/pics/projets/logo mockup/m-4.webp",
    "/pics/projets/logo mockup/m-5.webp",
  ];

  return (
    <>
      <div className="page-content">
        <div className="title">
            <h1>
                Design Identity
            </h1>
            <p>Design identity transforms the strategic essence of your brand into a rich and cohesive visual language. It begins with developing a memorable logo that encapsulates your brand&apos;s personality, supported by a color palette that conveys the right emotional tone. I carefully select typography that enhances readability and reinforces your brand&apos;s character. Imagery, iconography, and graphic systems are thoughtfully crafted to ensure consistency and visual harmony across all platforms. Design Identity also includes brand guidelines that empower your team to maintain a unified look and feel, no matter where your brand appears. This holistic approach ensures that your brand is instantly recognizable, trustworthy, and memorable, creating a lasting connection with your audience.</p>
        </div>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} onClick={() => setSelectedImage(src)}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="gallery-image"
              />
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
