import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-orange-500"
    : "text-[#ADB7BE] border-b-2 border-orange-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
