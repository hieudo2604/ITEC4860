import useLocalStorage from "use-local-storage";
import Sidebar from "./component/Sidebar";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Sidebar isDark={isDark} handleChange={() => setIsDark(!isDark)} />

      <main className={isDark ? "content dark" : "content light"}>
      </main>
    </div>
  );
}

export default App;
