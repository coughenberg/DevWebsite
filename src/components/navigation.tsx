import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type TabProp = {
  label: string;
  to: string;
  value: string;
};

const tabs: TabProp[] = [
  {
    label: "About Me",
    to: "/aboutMe",
    value: "aboutMe",
  },
  {
    label: "Previous Work",
    to: "/previousWork",
    value: "previousWork",
  },
  {
    label: "Projects",
    to: "/projects",
    value: "projects",
  },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleActiveTab = (
    _event: React.SyntheticEvent<Element, Event>,
    changeTab: string
  ) => {
    const foundTab = tabs.find((tab) => tab.value === changeTab) ?? tabs[0];
    setActiveTab(foundTab);
    navigate(foundTab.to);
  };

  return (
    <Tabs value={activeTab.value} onChange={handleActiveTab}>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          sx={{
            color:
              tab.value === activeTab.value ? "primary.main" : "secondary.main",
          }}
          value={tab.value}
        />
      ))}
    </Tabs>
  );
};
