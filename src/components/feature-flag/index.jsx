import { useContext } from "react";
import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeview",
      component: <TreeView menus={menus} />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h2 className="heading">Loading data ! Please wait</h2>;
  return (
    <section className="feature_flags">
      <h2 className="heading">feature flags</h2>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </section>
  );
}
