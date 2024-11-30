"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-amber-50 dark:bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t("about.mission")}
            </p>
            <div className="space-y-4">
              {[2020, 2021, 2022, 2023].map((year, index) => (
                <div
                  key={year}
                  className="flex items-center space-x-4 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-amber-500 font-bold">{year}</span>
                  <span className="flex-1 border-b border-amber-200 dark:border-amber-700"></span>
                  <span>Achievement {index + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}