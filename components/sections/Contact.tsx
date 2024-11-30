"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t("contact.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Twitter, label: "Twitter", value: "@aicompany" },
            { icon: Mail, label: "Email", value: "contact@aicompany.com" },
            { icon: Globe, label: "Website", value: "www.aicompany.com" },
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <contact.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{contact.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}