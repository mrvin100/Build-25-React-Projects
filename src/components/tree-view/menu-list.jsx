import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={list.indexOf(listItem)} item={listItem} />
          ))
        : null}
    </ul>
  );
}
