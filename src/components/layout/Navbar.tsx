"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const shouldBeDark = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        shouldBeDark ? "glass text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            {/* House SVG Icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Roof */}
              <path d="M18 4L3 17H7V32H15V22H21V32H29V17H33L18 4Z" fill="currentColor" className="text-accent"/>
              {/* Door */}
              <rect x="15" y="22" width="6" height="10" rx="1" fill="currentColor" className="text-accent" opacity="0.6"/>
            </svg>
            {/* Brand Text */}
            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-[0.2em] text-accent">LUXE</span>
              <span className="text-[10px] tracking-[0.35em] font-medium text-white/70 uppercase">Estates</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToFooter}
              className="bg-accent text-primary px-6 py-2 rounded-sm hover:bg-white transition-colors font-medium text-sm tracking-wide"
            >
              Contact Agent
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToFooter}
              className="block w-full text-left px-3 py-2 text-base font-medium text-accent"
            >
              Contact Agent
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
