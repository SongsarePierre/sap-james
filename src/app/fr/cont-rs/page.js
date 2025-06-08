"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pics/projets/aff/aff-1.webp",
    "/pics/projets/aff/aff-2.webp",
    "/pics/projets/aff/aff-3.webp",
    "/pics/projets/aff/aff-4.webp",
    "/pics/projets/aff/aff-5.webp",
    "/pics/projets/aff/aff-6.webp",
    "/pics/projets/aff/aff-7.webp",
    "/pics/projets/aff/aff-8.webp",
    "/pics/projets/aff/aff-9.webp",
    "/pics/projets/aff/aff-10.webp",
    "/pics/projets/aff/aff-11.webp",
    "/pics/projets/aff/aff-12.webp",
    "/pics/projets/aff/aff-13.webp",
    "/pics/projets/aff/aff-14.webp",
    "/pics/projets/aff/aff-15.webp",
    "/pics/projets/aff/aff-16.webp",
    "/pics/projets/aff/aff-17.webp",
    "/pics/projets/aff/aff-18.webp",
    "/pics/projets/aff/aff-19.webp",
    "/pics/projets/aff/aff-20.webp",
    "/pics/projets/aff/aff-21.webp",
    "/pics/projets/aff/aff-22.webp",
    "/pics/projets/aff/aff-23.webp",
  ];

  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="stylesheet" href="cont-rs.css" />
      </Head>

      <div className="page-content">
        <div className="title">
            <h1>
                Création de contenu visuel pour les réseaux sociaux
            </h1>
            <p>La création de contenu visuel pour les réseaux sociaux consiste à transformer l&apos;identité de votre marque en images percutantes et facilement partageables. Je développe des visuels originaux adaptés aux spécificités de chaque plateforme : Instagram, Facebook, LinkedIn, TikTok, etc. Cela inclut des illustrations, des photos, des typographies dynamiques et des animations pour capter l&apos;attention de votre audience. J'élabore des templates et des systèmes graphiques qui garantissent la cohérence de votre marque sur tous vos réseaux sociaux, tout en intégrant les dernières tendances et les meilleures pratiques. Cette approche globale vous permet de renforcer votre présence en ligne, d&apos;engager votre communauté et de vous démarquer de la concurrence.</p>
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
