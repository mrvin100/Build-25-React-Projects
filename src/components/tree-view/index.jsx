import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <section className="tree_view container">
      <h2 className="heading">Tree view</h2>
      <MenuList list={menus} />
    </section>
  );
}
