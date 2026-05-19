"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Filter, SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hoodies", "T-Shirts", "Bottoms", "Outerwear", "Accessories"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="heading-luxury text-4xl md:text-5xl mb-4">THE COLLECTION</h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Premium Export Surplus</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filters bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-zinc-800 pb-6 gap-6">
          <div className="flex items-center space-x-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`uppercase tracking-widest text-sm whitespace-nowrap transition-luxury ${
                  activeCategory === cat ? "text-white border-b border-white pb-1" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-luxury uppercase tracking-widest">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-luxury uppercase tracking-widest">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Sort</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
