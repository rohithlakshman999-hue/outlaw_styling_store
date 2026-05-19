"use client";

import { collections } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Collections() {
  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <h1 className="heading-luxury text-4xl md:text-5xl mb-4 text-white">CURATED COLLECTIONS</h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Explore our exclusive edits</p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col space-y-8 md:space-y-16">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-2/3 h-[500px] md:h-[700px] relative overflow-hidden bg-zinc-900 group rounded-md shadow-xl">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center px-4 md:px-12 text-center md:text-left">
                <span className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-4">Collection {index + 1}</span>
                <h2 className="heading-luxury text-4xl md:text-5xl text-white mb-6 uppercase">{collection.name}</h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Discover the essence of modern luxury streetwear through our exclusive {collection.name.toLowerCase()} edit. 
                  Designed for those who lead, not follow.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center space-x-3 text-white uppercase tracking-widest text-sm font-semibold hover:text-gray-400 transition-luxury mx-auto md:mx-0 border-b border-white pb-1 w-fit"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
