const items = [
  {
    id: 1,
    logo: "/toyota.avif",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },

  {
    id: 2,
    logo: "/ramp.avif",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },

  {
    id: 3,
    logo: "/Planful_Logo.avif",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },

  {
    id: 4,
    logo: "/match.avif",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },

  {
    id: 5,
    logo: "/vercel-logotype-light.svg",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },

  {
    id: 6,
    logo: "/deel_2025.avif",
    pre: "Streamlined workflows to reduce timelines by 3x. →",
  },
];

function LogoCard() {
  return (
    <div className="flex items-center flex-wrap py-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-2/6 flex items-start justify-center flex-col py-2"
        >
          <img src={item.logo} alt="" className="w-[80px] py-3" />
          <p className="hover:to-blue-500 cursor-pointer">{item.pre}</p>
        </div>
      ))}

      
    </div>
  );
}

export default LogoCard;
