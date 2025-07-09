import React from "react";
import Button from "./Button";
import items from "../../utils/NavBar.json";

const featuresData: FeatureColumnType[] = items;

type FeatureItemType = {
  title: string;
  description: string;
  isNew?: boolean;
};

type FeatureColumnType = {
  title: string;
  items: FeatureItemType[];
};

const FeatureItem: React.FC<FeatureItemType> = ({
  title,
  description,
  isNew,
}) => (
  <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer mt-2">
    <li className="text-2xl font-bold text-zinc-700 flex items-center gap-2">
      {title}
      {isNew && (
        <span className="bg-blue-100 text-blue-800 py-[1px] px-2 rounded-2xl text-[12px] font-semibold hover:bg-zinc-100 transition-all duration-200">
          New
        </span>
      )}
    </li>
    <li className="text-[13px] text-gray-500">{description}</li>
  </ul>
);

const FeatureColumn: React.FC<FeatureColumnType> = ({ title, items }) => (
  <div className="w-full h-full flex flex-col">
    <span className="text-sm text-gray-500 px-4">{title}</span>
    {items.map((item, index) => (
      <FeatureItem
        key={index}
        title={item.title}
        description={item.description}
        isNew={item.isNew}
      />
    ))}
  </div>
);

const NotionBar: React.FC = () => {
  return (
    <div className="showBar w-full h-[55vh] absolute top-15 left-0 z-50 right-0 py-8 px-20 bg-white shadow-md shadow-zinc-200 flex items-center justify-between">
      {featuresData.map((column, index) => (
        <FeatureColumn key={index} title={column.title} items={column.items} />
      ))}

      <div className="w-full h-full ml-4 bg-gray-100 rounded-2xl py-4 px-6">
        <p className="font-semibold text-zinc-700 text-md">
          Try the Notion desktop app for a faster experience
        </p>
        <Button />
        <img
          src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fmeta%2Fstartups_background.png&w=384&q=75"
          alt="Notion Desktop App"
          className="w-2/4 mx-auto"
        />
      </div>
    </div>
  );
};

export default NotionBar;
