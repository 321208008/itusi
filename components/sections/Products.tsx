"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    title: "AI Analytics",
    description: "Transform your business data into actionable insights with our advanced AI-powered analytics platform",
    url: "https://analytics.aicompany.com"
  },
  {
    image: "https://images.unsplash.com/photo-1675557009875-439d67b75f68",
    title: "Smart Assistant",
    description: "Enhance customer experience with our intelligent chatbot that understands and responds in natural language",
    url: "https://assistant.aicompany.com"
  },
  {
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671",
    title: "Data Platform",
    description: "Securely manage and analyze your enterprise data with our comprehensive data management solution",
    url: "https://data.aicompany.com"
  }
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t("products.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600"
                    onClick={() => window.open(product.url, '_blank')}
                  >
                    {t("products.visit")}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}