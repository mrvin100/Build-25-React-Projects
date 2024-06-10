import LoadMoreData from "./components/load-more-data";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import "./css/styles.css";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <TreeView menus={menus} />
    </>
  );
}
export default App;
