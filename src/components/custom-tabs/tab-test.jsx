import Tabs from "./tabs";

export default function TabTest({ tabs = [] }) {
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
