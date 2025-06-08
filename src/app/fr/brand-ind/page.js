"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
      <Head>
        <title>Gallery</title>
        <link rel="stylesheet" href="brand-ind.css" />
      </Head>

      <div className="page-content">
        <div className="title">
            <h1>
                Identité visuelle
            </h1>
            <p>L’identité visuelle est l’expression graphique de votre marque. Elle se compose d’éléments visuels comme le logo, la palette de couleurs, la typographie, les icônes et les motifs. Ces éléments travaillent ensemble pour créer une image cohérente et distinctive qui attire votre public cible et le fidélise. Je développe des guides de style et des systèmes graphiques complets pour assurer la cohérence de votre marque sur tous les supports: print, digital et réseaux sociaux. Une identité visuelle bien pensée renforce la reconnaissance de votre marque et laisse une impression durable.</p>
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
