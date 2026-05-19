"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, collections } from "@/data/products";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&q=80&w=2000",
    title: "REDEFINE\nYOUR STYLE",
    subtitle: "Export Surplus Apparel"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000",
    title: "MODERN\nESSENTIALS",
    subtitle: "Minimalist Daily Wear"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1550614000-4b95d415d8eb?auto=format&fit=crop&q=80&w=2000",
    title: "STREET\nCULTURE",
    subtitle: "Premium Oversized Fits"
  }
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Ambient Glowing Blobs */}
        <div className="ambient-blob w-96 h-96 bg-[var(--accent-1)] top-[-10%] left-[-10%]" />
        <div className="ambient-blob w-96 h-96 bg-[var(--accent-2)] bottom-[-10%] right-[-10%] animation-delay-2000" />
        <div className="ambient-blob w-64 h-64 bg-[var(--accent-3)] top-[40%] left-[60%] animation-delay-4000" />

        {/* Giant Overlapping Text (Background) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none opacity-20"
        >
          <h1 className="text-[15vw] font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
            OUTLAW
          </h1>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-0 mix-blend-overlay"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt="Hero Background"
              fill
              priority
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
        
        {/* Giant Overlapping Text (Foreground) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden pointer-events-none"
        >
          <h1 className="text-[15vw] font-black tracking-tighter text-outline opacity-40">
            OUTLAW
          </h1>
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 text-center flex flex-col items-center mt-[15vh]">
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-[var(--accent-3)] uppercase tracking-[0.4em] text-sm md:text-base mb-4 font-bold drop-shadow-md"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="heading-luxury text-4xl md:text-6xl text-white mb-10 whitespace-pre-line drop-shadow-2xl"
            >
              {heroSlides[currentSlide].title}
            </motion.h2>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:scale-105 hover:bg-gradient-to-r hover:from-[var(--accent-1)] hover:to-[var(--accent-2)] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-sm"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${currentSlide === idx ? "w-12 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] shadow-[0_0_10px_var(--accent-1)]" : "w-6 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
        
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:text-[var(--accent-3)] hover:scale-110 transition-all hidden md:block border border-white/10 hover:border-[var(--accent-3)]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 backdrop-blur-md rounded-full text-white/70 hover:text-[var(--accent-3)] hover:scale-110 transition-all hidden md:block border border-white/10 hover:border-[var(--accent-3)]">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Brand Intro */}
      <section className="py-24 bg-black relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 md:px-8 max-w-4xl text-center"
        >
          <p className="text-xl md:text-4xl text-gray-300 leading-relaxed font-light">
            We are OUTLAW STYLING STUDIO. A modern fashion sanctuary blending <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] font-bold italic animate-gradient-x">luxury aesthetics</span> with streetwear sensibility. Discover hand-picked premium apparel that speaks louder than words.
          </p>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="ambient-blob w-[500px] h-[500px] bg-[var(--accent-2)] top-[-20%] left-[-20%] opacity-10" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6"
          >
            <h2 className="heading-luxury text-3xl md:text-4xl text-white flex items-center space-x-3">
              <span className="w-2 h-8 bg-[var(--accent-1)] block"></span>
              <span>NEW ARRIVALS</span>
            </h2>
            <Link href="/shop" className="text-sm uppercase tracking-widest hover:text-[var(--accent-1)] transition-colors hidden md:block text-gray-400">
              View All
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/shop" className="text-sm uppercase tracking-widest hover:text-[var(--accent-1)] transition-colors border-b border-zinc-800 pb-1 text-gray-400">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <Link 
                key={collection.id} 
                href="/collections"
                className={`group relative overflow-hidden bg-zinc-900 ${
                  index === 0 ? "md:col-span-2 md:row-span-2 h-[500px] md:h-auto" : "h-[400px] md:h-[350px]"
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="heading-luxury text-2xl md:text-4xl text-white mb-3 tracking-wide">{collection.name}</h3>
                  <span className="text-sm uppercase tracking-widest text-gray-300 flex items-center space-x-2 group-hover:text-white transition-luxury">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-zinc-900 border-t border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="py-4 md:py-0">
              <h4 className="heading-luxury text-xl mb-4 text-white">Pan India Free Shipping</h4>
              <p className="text-gray-400 text-sm leading-relaxed px-4">We deliver your premium streetwear anywhere in India, completely free of charge.</p>
            </div>
            <div className="pt-8 md:pt-0">
              <h4 className="heading-luxury text-xl mb-4 text-white">Cash on Delivery</h4>
              <p className="text-gray-400 text-sm leading-relaxed px-4">Pay when you receive your order. Hassle-free shopping experience tailored for you.</p>
            </div>
            <div className="pt-8 md:pt-0">
              <h4 className="heading-luxury text-xl mb-4 text-white">Premium Quality</h4>
              <p className="text-gray-400 text-sm leading-relaxed px-4">Export surplus apparel meticulously inspected to ensure luxury standard quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
