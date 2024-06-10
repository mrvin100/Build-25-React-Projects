import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };
  return (
    <li className="item">
      <span className="label" onClick={() => handleToggleChildren(item.label)}>
        {item.label}
        {item && item.children && item.children.length ? (
          <i
            className={`bx bx-${
              displayCurrentChildren[item.label] ? "minus" : "plus"
            }`}
          ></i>
        ) : null}
      </span>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
