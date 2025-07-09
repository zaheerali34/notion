import { FC } from "react";
import {
  FaSlack,
  FaGoogleDrive,
  FaGithub,
  FaJira,
  FaMicrosoft,
  FaShareSquare,
  FaCloud,
  FaEnvelope,
  FaStream,
  FaTicketAlt,
  FaSalesforce,
  FaDropbox,
} from "react-icons/fa";

type IntegrationItem = {
  name: string;
  icon: React.ReactElement;
};

const leftIntegrations: IntegrationItem[] = [
  { name: "Slack", icon: <FaSlack /> },
  { name: "Google Drive", icon: <FaGoogleDrive /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Jira", icon: <FaJira /> },
  { name: "MS Teams", icon: <FaMicrosoft /> },
  { name: "SharePoint", icon: <FaShareSquare /> },
];

const rightIntegrations: IntegrationItem[] = [
  { name: "OneDrive", icon: <FaCloud /> },
  { name: "Gmail", icon: <FaEnvelope /> },
  { name: "Linear", icon: <FaStream /> },
];

const comingSoon: IntegrationItem[] = [
  { name: "Zendesk", icon: <FaTicketAlt /> },
  { name: "Salesforce", icon: <FaSalesforce /> },
  { name: "Box", icon: <FaDropbox /> },
];

const IntegrationList: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-2 gap-10 text-zinc-800 text-sm">
      {/* Left Column */}
      <div>
        <h3 className="font-semibold text-base mb-4">Integrates with</h3>
        <ul className="space-y-1">
          {leftIntegrations.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-[Notion-Regular]">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div>
        <ul className="space-y-1">
          {rightIntegrations.map((item, i) => (
             <li key={i} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-[Notion-Regular]">{item.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-base mt-6 mb-2">Coming soon</h3>
        <ul className="space-y-1">
          {comingSoon.map((item, i) => (
             <li key={i} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-[Notion-Regular]">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntegrationList;
