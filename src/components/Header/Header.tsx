import { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const iconPaths: string[] = [
  "src/assets/icon-sun.svg",
  "src/assets/icon-moon.svg",
];
interface HeaderProps {
  isSun: boolean;
}

const Header = (props: HeaderProps) => {
  const { isSun } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      <img
        src={isSun ? iconPaths[0] : iconPaths[1]}
        alt=""
        onClick={themeContext?.toggleTheme}
      />
    </div>
  );
};

export default Header;
