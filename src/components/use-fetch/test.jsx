import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(error, data, pending);
  return (
    <section className="use_fetch_hook container">
      <h2 className="heading">use fetch Hook</h2>
      {pending ? <h3 className="heading">pending ! Please wait</h3> : null}
      {error ? <h3 className="heading">{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <h3 className="heading" key={productItem.key}>
              {productItem.title}
            </h3>
          ))
        : null}
    </section>
  );
}
