"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-3)] animate-gradient-x text-white text-xs font-bold tracking-widest text-center py-2.5 uppercase shadow-md relative z-[60]">
        Pan India Free Shipping on all orders
      </div>
      
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-zinc-800" : "bg-black/50 py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white hover:text-[var(--accent-1)] transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          {/* Logo */}
          <Link href="/" className="flex-1 md:flex-none flex justify-center md:justify-start hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide uppercase transition-all duration-300 relative group ${
                  pathname === link.href ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5 md:space-x-7">
            <motion.button whileHover={{ scale: 1.1, color: "var(--accent-3)" }} className="text-white transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, color: "var(--accent-2)" }} className="text-white transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="text-white hover:text-[var(--accent-1)] transition-colors relative group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-gradient-to-tr from-[var(--accent-1)] to-[var(--accent-2)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                0
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col p-6 h-screen overflow-hidden border-r border-zinc-800 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-10 border-b border-zinc-800/50 pb-4">
                <Logo />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-[var(--accent-1)] transition-colors bg-zinc-900 p-2 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <nav className="flex flex-col space-y-8 flex-1 mt-6 px-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl heading-luxury uppercase tracking-widest transition-all duration-300 block ${
                        pathname === link.href ? "text-gradient font-bold translate-x-4" : "text-gray-400 hover:text-white hover:translate-x-2"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t border-zinc-800/50 pt-8 pb-6">
                <div className="flex items-center justify-around space-x-6 text-sm text-gray-400">
                  <motion.button whileHover={{ scale: 1.1, color: "var(--accent-2)" }} className="hover:text-white transition-colors flex flex-col items-center space-y-2">
                    <User className="w-6 h-6" /> <span className="uppercase tracking-widest text-xs">Account</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1, color: "var(--accent-3)" }} className="hover:text-white transition-colors flex flex-col items-center space-y-2">
                    <Search className="w-6 h-6" /> <span className="uppercase tracking-widest text-xs">Search</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
