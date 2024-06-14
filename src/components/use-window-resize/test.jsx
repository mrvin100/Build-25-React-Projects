import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <section className="window_resize container">
      <h2 className="heading">use Window resize hook</h2>
      <span>width is {width}</span>
      <span>height is {height}</span>
    </section>
  );
}
