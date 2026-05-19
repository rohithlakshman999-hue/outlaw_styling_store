"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const aboutSections = [
  {
    id: "a1",
    title: "Uncompromising Quality",
    subtitle: "01 / Aesthetic",
    description: "Every piece in our collection is meticulously sourced from premium export surplus lines. Minimalist design meets bold execution, featuring dark palettes and structured silhouettes. We deliver exceptional fabrics at accessible price points without sacrificing the luxury aesthetic.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "a2",
    title: "Sustainability",
    subtitle: "02 / Responsibility",
    description: "Repurposing export surplus to reduce fashion waste while maintaining premium standards. We believe in a circular fashion ecosystem where high-quality garments find their rightful place rather than ending up in landfills.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "a3",
    title: "Community",
    subtitle: "03 / Culture",
    description: "Built for the culture. Outlaw isn't just a brand, it's a movement of authentic self-expression. Designed for those who lead, not follow. We empower individuals to embrace their unique styling identity.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-24 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16 mt-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-luxury text-4xl md:text-6xl mb-4 uppercase"
        >
          THE OUTLAW ETHOS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm tracking-widest uppercase"
        >
          Redefining modern streetwear
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col space-y-8 md:space-y-16">
          {aboutSections.map((section, index) => (
            <div 
              key={section.id} 
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-2/3 h-[500px] md:h-[700px] relative overflow-hidden bg-zinc-900 group rounded-md shadow-xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center px-4 md:px-12 text-center md:text-left">
                <span className="text-[var(--accent-3)] uppercase tracking-[0.2em] text-xs mb-4 font-bold drop-shadow-md">{section.subtitle}</span>
                <h2 className="heading-luxury text-3xl md:text-5xl text-white mb-6 uppercase leading-tight">{section.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-base md:text-lg">
                  {section.description}
                </p>
                {index === aboutSections.length - 1 && (
                  <Link
                    href="/shop"
                    className="inline-flex items-center space-x-3 text-white uppercase tracking-widest text-sm font-semibold hover:text-[var(--accent-1)] transition-luxury mx-auto md:mx-0 border-b border-zinc-700 hover:border-[var(--accent-1)] pb-1 w-fit"
                  >
                    <span>Join the Movement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
