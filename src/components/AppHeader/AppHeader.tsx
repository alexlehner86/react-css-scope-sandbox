import { useCompHostAttr } from "../../shared/useCompHostAttr";
import "./AppHeader.css";

const AppHeader = () => {
  const hostRef = useCompHostAttr<HTMLHeadElement>();

  return (
    <header ref={hostRef} className="app-header">
      <h1>Beer List 🍻</h1>
      <p>So refreshing!</p>
    </header>
  );
};

export default AppHeader;
