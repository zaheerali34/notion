import { NavLink } from "react-router-dom";
import Logo from "../../assets/notion.png";
import { useState, type FormEvent } from "react";
import { FaChevronDown } from "react-icons/fa";
import Language from "./Languages.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Auth/firebase.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);

function Signup() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [ErrorPass, setErrorPass] = useState('');

  const userSignup = async (e: FormEvent) => {
    e.preventDefault();

    // if (!Email || !Password){
    //   alert('Email and Password Add');
    // }

    if (Password.length < 6){
      setErrorPass('Passworld 6 characters Not');
    }

    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      localStorage.setItem("login", "true");
      toast.success("User Created Successfully");
      navigate("/dashoboard");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast.error("Error creating user: " + errorMessage);
    }

    setEmail('');
    setPassword('');
    setErrorPass('');
  };


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
              {Language.map((lang) => (
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
          <form className="w-[20rem] max-sm:w-full flex items-start flex-col gap-2 mt-8">
            <label className="text-sm font-[Notion-Regular] text-gray-700">
              Work email
            </label>
            <input
              type="text"
              placeholder="Enter your email address..."
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-2 border-2 border-gray-100 rounded-md outline-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-2 border-2 border-gray-100 rounded-md outline-blue-500"
            />

            {ErrorPass && <span className="text-red-500">{ErrorPass}</span>}            

            <span className="text-gray-400 text-[13px]">
              Use an organization email to easily collaborate with teammates
            </span>
            <button
              onClick={userSignup}
              className="w-full bg-blue-500 text-white text-center py-2 mt-2 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold"
            >
              Continue
            </button>

            <p className="text-[12px] text-gray-700">
              By continuing, you acknowledge that you understand and agree to
              the <span className="text-blue-500">Terms & Conditions</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
