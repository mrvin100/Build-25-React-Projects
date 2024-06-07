import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }&select=title,price,thumbnail`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);
  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <section className="products container">
      <div className="box_container">
        {products && products.length
          ? products.map((item) => (
              <div className="box" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h3 className="heading">{item.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="btns">
        <button
          disabled={disableButton}
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          {disableButton
            ? "You have reached to 100 products"
            : "Load More Products"}
        </button>
      </div>
    </section>
  );
}
