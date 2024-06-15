import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  if (error) {
    return <h2 className="heading">Error occured ! Please try again</h2>;
  }
  if (pending) {
    return <h2 className="heading">Loading ! Please wait.</h2>;
  }
  return (
    <section className="scroll_to_top_and_bottom container">
      <h2 className="heading">Scroll to top and bottom features</h2>
      <h3 className="heading">this is the top section</h3>
      <button onClick={handleScrollToBottom} className="btn">
        Scroll to bottom
      </button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button className="btn" onClick={handleScrollToTop}>
        Scroll to top
      </button>
      <div ref={bottomRef}></div>
      <h3 className="heading">this is the bottom of this page</h3>
    </section>
  );
}
