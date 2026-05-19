"use client";

import { useState, use } from "react";
import { products } from "@/data/products";
import { Heart, ShoppingBag, ArrowLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <div className="pt-32 text-center h-screen bg-black">Product not found</div>;

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-sm text-gray-500 uppercase tracking-widest">
          <Link href="/shop" className="hover:text-white transition-luxury flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
          <span className="mx-4">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Images Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 shrink-0 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 md:w-full aspect-[3/4] bg-zinc-900 border transition-luxury ${activeImage === idx ? 'border-white' : 'border-transparent'}`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="object-cover w-full h-full opacity-80 hover:opacity-100" />
                </button>
              ))}
            </div>
            <div className="flex-1 relative aspect-[3/4] bg-zinc-900 overflow-hidden">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col py-8">
            <h1 className="heading-luxury text-3xl md:text-5xl mb-4 uppercase tracking-wide">{product.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">₹{product.price.toLocaleString()}</p>
            
            <p className="text-gray-400 leading-relaxed mb-10 font-light text-sm md:text-base">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <div className="flex justify-between mb-4 text-sm tracking-widest uppercase">
                <span className="text-gray-400">Color</span>
                <span>{selectedColor || 'Select'}</span>
              </div>
              <div className="flex space-x-4">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm uppercase tracking-wider transition-luxury ${
                      selectedColor === color ? 'border-white bg-white text-black' : 'border-zinc-700 hover:border-white text-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-10">
              <div className="flex justify-between mb-4 text-sm tracking-widest uppercase">
                <span className="text-gray-400">Size</span>
                <button className="underline underline-offset-4 text-gray-500 hover:text-white transition-luxury">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border flex items-center justify-center text-sm transition-luxury ${
                      selectedSize === size ? 'border-white bg-white text-black' : 'border-zinc-700 hover:border-white text-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-zinc-700 w-full sm:w-32 h-14 justify-between px-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-white"><Minus className="w-4 h-4" /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-white"><Plus className="w-4 h-4" /></button>
              </div>
              
              <button className="flex-1 bg-white text-black h-14 flex items-center justify-center space-x-3 uppercase tracking-widest font-semibold hover:bg-gray-200 transition-luxury">
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="w-14 h-14 border border-zinc-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-luxury shrink-0">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Details */}
            <div className="border-t border-zinc-800 pt-8 mt-auto space-y-4 text-sm text-gray-400">
              <div className="flex justify-between py-2 border-b border-zinc-800/50">
                <span className="uppercase tracking-widest">Materials</span>
                <span>100% Premium Cotton</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800/50">
                <span className="uppercase tracking-widest">Shipping</span>
                <span>Free Pan India</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800/50">
                <span className="uppercase tracking-widest">Returns</span>
                <span>7 Days Return Policy</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
