"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-amber-500" />
            <span className="font-bold text-xl">AI Company</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["home", "products", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <div className="flex space-x-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
                size="sm"
                className="bg-amber-500 hover:bg-amber-600"
              >
                EN
              </Button>
              <Button
                variant={language === "zh" ? "default" : "outline"}
                onClick={() => setLanguage("zh")}
                size="sm"
                className="bg-amber-500 hover:bg-amber-600"
              >
                中
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}