"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    isNew?: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4 rounded-sm shadow-md">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-lg">
            New
          </span>
        )}
        <motion.button 
          whileHover={{ scale: 1.1, color: "var(--accent-1)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:bg-black/40 backdrop-blur-md rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <Heart className="w-5 h-5" />
        </motion.button>
        
        <Link href={`/shop/${product.id}`} className="absolute inset-0 block">
          <Image
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-white to-gray-200 text-black py-3 text-sm font-bold uppercase tracking-wider shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:from-[var(--accent-1)] hover:to-[var(--accent-3)] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 rounded-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>

      <Link href={`/shop/${product.id}`} className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-1 group-hover:text-[var(--accent-3)] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 font-medium">₹{product.price.toLocaleString()}</p>
      </Link>
    </motion.div>
  );
}
