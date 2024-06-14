import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));
  return (
    <section className="onclick_outside_test container">
      {showContent ? (
        <div ref={ref}>
          <h1 className="heading">This is a random content</h1>
          <p>
            Please click ouside of this. It won&apos;t close if you click inside
            of this content.
          </p>
        </div>
      ) : (
        <button className="btn" onClick={() => setShowContent(true)}>
          show Content
        </button>
      )}
    </section>
  );
}
