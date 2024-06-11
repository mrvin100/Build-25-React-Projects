/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <section className="scroll_indicator container">
      <div className="top_container">
        <h2 className="heading">Custom scroll indicator</h2>
        <div className="scroll_porgress_tracking_container">
          <div
            className="current_progress_bar"
            style={{
              width: `${scrollPercentage}%`,
              display: `${scrollPercentage ? "flex" : "none"}`,
            }}
          >
            {Math.round(scrollPercentage)}%
          </div>
        </div>
      </div>
      <div className="data_container">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <h3 className="heading" key={dataItem.id}>
                {dataItem.title}
              </h3>
            ))
          : null}
      </div>
    </section>
  );
}
