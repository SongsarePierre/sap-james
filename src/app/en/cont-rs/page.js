"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./cont-rs.css";

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
      <div className="page-content">
        <div className="title">
            <h1>
                Visual Content Creation for Social Media
            </h1>
            <p>Visual Content Creation for Social Media is the art and strategy of translating your brand&apos;s identity into stunning, shareable visuals that resonate with your audience. It starts by understanding your brand voice and target audience, ensuring every image, video, or graphic aligns seamlessly with your overall message. I develop templates and design systems that guarantee consistency across platforms, from Instagram posts to Facebook stories, LinkedIn carousels to TikTok thumbnails. Our approach includes crafting original illustrations, curated photos, typographic treatments, and animated visuals that stop the scroll and spark conversation. I integrate trends and platform best practices while ensuring your content remains authentic and distinctive. This holistic strategy not only builds brand recognition but also fosters a community of loyal followers who love engaging with your content.</p>
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
