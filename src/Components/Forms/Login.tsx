import { NavLink } from "react-router-dom";
import Logo from "../../assets/notion.png";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { SignIn } from '@clerk/clerk-react';

const languages = [
  "English (US)",
  "English (UK)",
  "Español",
  "Français",
  "Deutsch",
  "日本語",
  "한국어",
  "中文 (简体)",
  "中文 (繁體)",
  "Português (Brasil)",
  "Português (Portugal)",
  "Italiano",
  "Nederlands",
  "Русский",
  "हिन्दी",
  "বাংলা",
  "தமிழ்",
  "తెలుగు",
  "ગુજરાતી",
  "اردو",
  "ไทย",
  "Tiếng Việt",
  "Türkçe",
  "Polski",
  "Українська",
  "Čeština",
  "Slovenčina",
  "Română",
  "Ελληνικά",
  "עברית",
  "العربية",
  "فارسی",
  "ภาษาไทย",
  "Suomi",
  "Svenska",
  "Norsk",
  "Dansk",
  "Magyar",
  "Hrvatski",
  "Bahasa Indonesia",
  "Bahasa Melayu",
  "Filipino",
  "IsiZulu",
  "Afrikaans",
  "Kiswahili",
  "Estonian",
  "Latvian",
  "Lithuanian",
  "Slovenian",
  "Icelandic"
];


const LoginOptions = [
  { id: 1, logo: "./Google__G__logo.svg.webp", label: "Continue with Google" },
  { id: 2, logo: "./download.png", label: "Continue with Apple" },
  { id: 3, logo: "./download (1).png", label: "Continue with Facebook" },
  { id: 4, logo: "./download (2).png", label: "Continue with GitHub" },
  { id: 5, logo: "./images.png", label: "Continue with Email" },
];

function Login() {
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="w-full h-screen p-6 overflow-hidden">
      <div className="w-full flex items-center gap-2">
        <NavLink to={"/"} className="w-[30px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </NavLink>

        <div className="relative inline-block">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded-md py-3 px-4  hover:text-black transition-all duration-500"
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
            <div className="h-[70vh] w-[17rem] absolute top-14 mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[160px] z-10 overflow-scroll">
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
      </div>

      <div className="w-full h-full flex items-center justify-center flex-col">
        <div>
          <h3 className="text-[1.4rem] font-[Notion-Regular] font-bold leading-5">
            Think it. Make it.
          </h3>
          <h3 className="text-[1.4rem] font-[Notion-Regular] font-bold text-gray-400">
            Log in to your Notion account
          </h3>
        </div>

        <div className="mt-6">
          {/* Clerk SignIn component replaces the manual form and options */}
          <SignIn appearance={{ elements: { card: 'shadow-sm rounded-md', formButtonPrimary: 'bg-blue-500 hover:bg-blue-400 text-white font-semibold', headerTitle: 'text-[1.4rem] font-[Notion-Regular] font-bold', headerSubtitle: 'text-[1.4rem] font-[Notion-Regular] font-bold text-gray-400' } }} />
        </div>
      </div>
    </div>
  );
}

export default Login;
