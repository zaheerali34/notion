import { useState } from "react";
import {
  FaChevronDown,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    "English (US)",
    "English (UK)",
    "Español",
    "Français",
    "Deutsch",
    "日本語",
    "한국어",
  ];

  const footerSections = {
    Company: [
      "About us",
      "Careers",
      "Security",
      "Status",
      "Terms & privacy",
      "Your privacy rights",
    ],
    Download: ["iOS & Android", "Mac & Windows", "Calendar", "Web Clipper"],
    Resources: [
      "Help center",
      "Pricing",
      "Blog",
      "Community",
      "Integrations",
      "Templates",
      "Affiliates",
    ],
    "Notion for": ["Enterprise", "Small business", "Personal"],
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black">NJ</h2>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative mb-6 inline-block">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-600 bg-gray-200 rounded-md py-5 px-4  hover:text-black transition-colors"
              >
                <span className="text-sm">🌐</span>
                <span className="text-sm">{selectedLanguage}</span>
                <FaChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[160px] z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Privacy Links */}
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <a href="#" className="hover:text-black transition-colors">
                  Do Not Sell or Share My Info
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition-colors">
                  Cookie settings
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([sectionTitle, links]) => (
            <div key={sectionTitle} className="lg:col-span-1">
              <h3 className="font-semibold text-black mb-1">{sectionTitle}</h3>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      <span className=" font-[Notion-Regular] text-zinc-900">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Explore more link for Notion for section */}
              {sectionTitle === "Notion for" && (
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-black font-medium text-sm hover:underline flex items-center"
                  >
                    Explore more →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© 2025 Notion Labs, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
