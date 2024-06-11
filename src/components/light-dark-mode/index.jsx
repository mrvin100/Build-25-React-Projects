import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <section className="light_dark container" data-theme={theme}>
      <p>Hello World! 👊 &#127947; &#127881;</p>
      <button className="btn" onClick={handleToggleTheme}>
        Change Theme
      </button>
    </section>
  );
}
