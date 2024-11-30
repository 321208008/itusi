"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Brain className="mx-auto h-20 w-20 text-amber-500 mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t("hero.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
          >
            {t("hero.cta")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}