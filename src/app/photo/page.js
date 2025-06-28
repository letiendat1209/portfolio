"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    alt: "Ảnh chụp 1",
  },
  {
    src: "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 2",
  },
  {
    src: "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 3",
  },
  {
    src: "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Ảnh chụp 4",
  },
  {
    src: "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 5",
  },
  {
    src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 6",
  },
  {
    src: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 7",
  },
  {
    src: "https://images.unsplash.com/photo-1751054125606-c2e7ee7861e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ảnh chụp 8",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1674824835422-1447f5901086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 9",
  },
  {
    src: "https://images.unsplash.com/photo-1732690098554-5b89289a6a64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGFuaW1lfGVufDB8fDB8fHww",
    alt: "Ảnh chụp 10",
  },
];

export default function PhotoPage() {
  return (
    <main>
      <header>
        <h1>Ảnh chụp</h1>
        <p className="mb-[1.7em]">
          Những bức ảnh chụp của tớ, từ những khoảnh khắc đáng nhớ đến những
          cảnh đẹp.
        </p>
        <hr className="hrlight" />
      </header>
      <div className="grid gap-[0.2em] mt-[2em] grid-cols-3 w-full">
        {imageData.map((image, index) => (
          <motion.div
            key={index}
            className="photo-item"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link href="/photo">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="relative aspect-square overflow-hidden rounded-[8px] cursor-pointer object-cover"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
