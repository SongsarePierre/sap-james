"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./product-d.css";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/pics/projets/ui/ui 1.webp",
      title: "Site Web Personnel pour un Designer UI/UX",
      description: "Un site web portfolio moderne et responsive, conçu pour un designer UI/UX, mettant en avant sa créativité, son approche centrée sur l&apos;utilisateur et son sens du détail. Ce projet propose une page d&apos;accueil élégante avec une section héro personnalisée, une barre de navigation intuitive, une galerie de projets présentant des études de cas, et un formulaire de contact pour une communication facile.",
      figmaLink: 'https://www.figma.com/proto/SFpggilmBUYEGznsR1NiUD/PIERRE-Bleu?node-id=1-2&t=HMwWqMZRmpU0jHgA-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'
    },
    {
      src: "/pics/projets/ui/ui 2.webp",
      title: "Site Web pour une Entreprise de Glaçons Premium et Sculptures sur Mesure",
      description: "Un site e-commerce dynamique créé pour une marque haut de gamme spécialisée dans les glaçons premium et les sculptures de glace sur mesure. Le site présente une page d&apos;accueil immersive qui invite les clients à découvrir les trois tailles de glaçons de qualité supérieure, chacun avec des coins arrondis pour sublimer chaque boisson.",
      figmaLink: 'https://www.figma.com/proto/ytEhUDuyXiLCSGInxgrLh2/Eis-Noire?node-id=1-251&p=f&t=9oYrUqhstF9Iat2Q-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A251'
    },
    {
      src: "/pics/projets/ui/ui 3.webp",
      title: "Site Web Moderne pour une Agence de Développement",
      description: "Un site web élégant et professionnel pour une agence digitale proposant des services de développement web et mobile. La page d&apos;accueil capte immédiatement l&apos;attention avec une section héro percutante qui met en avant l&apos;expertise de l&apos;agence et son engagement à fournir des solutions de qualité.",
      figmaLink: 'https://www.figma.com/proto/ItZw3rZ1aEFmTK9p4zOMge/Fortibtech--Copy-?node-id=1-2&p=f&t=C3gLQhkCRAvEY2Uv-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'
    }
  ];

  return (
    <>
      <div className="page-content">
        <div className="title">
          <h1>Design de produit</h1>
          <p>
            Le design de produit regroupe la création d&apos;applications mobiles, de sites web et de logiciels, en mettant l&apos;accent sur l&apos;ergonomie, l&apos;accessibilité et l&apos;expérience utilisateur. Je commençe par comprendre les besoins de vos utilisateurs finaux à travers des recherches approfondies et des ateliers collaboratifs. Ensuite, je traduit ces besoins en wireframes et prototypes interactifs avant de concevoir des interfaces graphiques modernes et engageantes. J'intégre également les principes d&apos;accessibilité et de design system pour assurer une cohérence et une évolutivité à long terme. Le design de produit, c&apos;est aussi une collaboration continue pour ajuster et améliorer vos produits en fonction des retours utilisateurs et des évolutions du marché.
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
                  <button>Voir la maquette  &#8599;</button>
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
