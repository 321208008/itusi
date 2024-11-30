"use client";

import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}