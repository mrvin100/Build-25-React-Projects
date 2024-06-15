import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "40vh",
        background: "red",
      },
    },
    {
      label: "second Card",
      style: {
        width: "100%",
        height: "40vh",
        background: "gray",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "40vh",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "40vh",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "40vh",
        background: "orange",
      },
    },
  ];
  const handleScrollToSection = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  return (
    <section className="scroll_to_top_and_bottom container">
      <h2 className="heading">Scroll to sections</h2>
      <button onClick={handleScrollToSection} className="btn">
        Scroll to third section
      </button>
      {data.map((dataItem, index) => {
        return (
          <div
            key={data.indexOf(dataItem)}
            style={dataItem.style}
            className="box"
            ref={index === 2 ? ref : null}
          >
            <h3 className="heading">{dataItem.label}</h3>
          </div>
        );
      })}
    </section>
  );
}
