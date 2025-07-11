import { NavLink } from "react-router-dom";
import Logo from "../../assets/notion.png";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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


const SignupOptions = [
  { id: 1, logo: "./Google__G__logo.svg.webp", label: "Continue with Google" },
  { id: 2, logo: "./download.png", label: "Continue with Apple" },
  { id: 3, logo: "./download (1).png", label: "Continue with Facebook" },
  { id: 4, logo: "./download (2).png", label: "Continue with GitHub" },
  { id: 5, logo: "./images.png", label: "Continue with Email" },
];

function Signup() {
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
            Your AI workspace.
          </h3>
          <h3 className="text-[1.4rem] font-[Notion-Regular] font-bold text-gray-400">
            Create your Notion account
          </h3>
        </div>

        <div className="mt-6">
          {SignupOptions.map((item, index) => (
            <nav key={index} className="w-[20rem]">
              <ul>
                <li className="w-full flex items-center gap-10 py-2 bg-white shadow-sm px-4 border-1 border-amber-50 mt-2 rounded-md justify-start cursor-pointer hover:bg-gray-100 transition-all duration-500">
                  <img src={item.logo} alt="" className="w-[20px]" />
                  <label className="text-sm font-[Notion-Regular] font-semibold text-zinc-700">
                    {item.label}
                  </label>
                </li>
              </ul>
            </nav>
          ))}

          <form className="w-[20rem] flex items-start flex-col gap-2 mt-8">
            <label className="text-sm font-[Notion-Regular] text-gray-700">
              Work email
            </label>
            <input
              type="text"
              placeholder="Enter your email address..."
              className="w-full py-2 px-2 border-2 border-gray-100 rounded-md outline-blue-500"
            />
            <span className="text-gray-400 text-[13px]">
              Use an organization email to easily collaborate with teammates
            </span>
            <button className="w-full bg-blue-500 text-white text-center py-2 mt-2 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold">
              Continue
            </button>

            <p className="text-[12px] text-gray-700">By continuing, you acknowledge that you understand and agree to the <span className="text-blue-500">Terms & Conditions</span> and <span className="text-blue-500">Privacy Policy</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
