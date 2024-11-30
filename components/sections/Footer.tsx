"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">AI Company</h3>
            <p className="text-gray-400">
              {t("footer.rights")} © {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("nav.products")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Analytics</li>
              <li>Smart Assistant</li>
              <li>Data Platform</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("nav.about")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Language</h4>
            <div className="space-x-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
                className="bg-amber-500 hover:bg-amber-600"
              >
                English
              </Button>
              <Button
                variant={language === "zh" ? "default" : "outline"}
                onClick={() => setLanguage("zh")}
                className="bg-amber-500 hover:bg-amber-600"
              >
                中文
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}