export default function Suggestions({ data, handleClick }) {
  return (
    <ul className="suggestions">
      {data && data.length ? (
        data.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))
      ) : (
        <li>Not found</li>
      )}
    </ul>
  );
}
