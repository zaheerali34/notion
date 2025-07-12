import { useState } from "react";

function Team() {
  const [activeTeam, setActiveTeam] = useState("Product");
  const team = [
    "Product",
    "Engineering",
    "Design",
    "IT",
    "Marketing",
    "Startups",
  ];

  const teamImages: Record<string, string> = {
    Product: "./product.avif",
    Engineering: "./engineering.avif",
    Design: "./design.avif",
    IT: "./it.avif",
    Marketing: "./marketing.avif",
    Startups: "./startups.avif",
  };

  return (
    <section className="w-full py-6 px-4 flex flex-col items-center gap-6">
      <header className="text-center">
        <h1 className="text-4xl font-[one] py-25 max-lg:py-15">"Your AI everything app."</h1>
        <h2 className="text-[3.5vw] font-bold max-lg:text-[3rem] max-lg:leading-11 max-sm:text-[2.5rem]">One space for every team.</h2>
      </header>

      <ul className="flex flex-wrap justify-center gap-0.5">
        {team.map((tag) => (
          <li
            key={tag}
            onClick={() => setActiveTeam(tag)}
            className={`py-1 px-4 text-sm bg-gray-200 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer ${
              activeTeam === tag ? "bg-gray-200" : "bg-white text-gray-700"
            }`}
          >
            {tag}
          </li>
        ))}
      </ul>
      <img
        src={teamImages[activeTeam]}
        alt={`${activeTeam} Product showcase`}
        className="w-10/12 max-sm:w-full rounded-xl "
      />

      <div className="w-full mt-20 flex flex-col items-center text-center">
        <h4 className="text-lg font-bold mb-4">
          More productivity. Fewer tools.
        </h4>
        <img
          src="./CrossOut-L.avif"
          alt="Crossed out tools"
          className="w-2/3 max-md:w-full"
        />
      </div>
    </section>
  );
}

export default Team;
