import LoadMoreData from "./components/load-more-data";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import LightDarkMode from "./components/light-dark-mode";
import QRCodeGenerator from "./components/qr-code-generator";
import TabTest from "./components/custom-tabs/tab-test";
import ScrollIndicator from "./components/scroll-indicator";
import "./css/styles.css";

function App() {
  const tabs = [
    { label: "1. arccordion", content: <Accordion /> },
    { label: "2. random color", content: <RandomColor /> },
    {
      label: "3. star rating",
      content: <StarRating noOfStars={5} />,
    },
    {
      label: "4. image slider",
      content: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      ),
    },
    {
      label: "5. load more data",
      content: <LoadMoreData />,
    },
    {
      label: "6. tree view",
      content: <TreeView menus={menus} />,
    },
    {
      label: "7. qr code generator",
      content: <QRCodeGenerator />,
    },
    {
      label: "8. light dark mode",
      content: <LightDarkMode />,
    },

    {
      label: "9. scroll indicator",
      content: (
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ),
    },
    {
      label: "10. custom tabs",
      content: (
        <TabTest
          tabs={[
            { label: "Tab 1", content: "Tab1 content" },
            { label: "Tab 2", content: "Tab2 content" },
            { label: "Tab 3", content: "Tab3 content" },
          ]}
        />
      ),
    },
  ];
  console.log(tabs);
  return (
    <>
      <TabTest tabs={tabs} />
      {/* <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} /> 
      <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}
      />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
    <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    */}
    </>
  );
}
export default App;
