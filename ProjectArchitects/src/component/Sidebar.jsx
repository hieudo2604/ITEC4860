import useLocalStorage from "use-local-storage";
import "./Sidebar.css";

function Sidebar({ handleChange, isChecked }) {
  const [isOpen, setIsOpen] = useLocalStorage("isOpen", false);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h3 className="w3-padding-small">Project Architect</h3>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">About</a></li>
          </ul>
          <hr></hr>
        </nav>

        <div className="toggle-container">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}
          />
          <label htmlFor="check" className="w3-large"> Dark Mode </label>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Sidebar;
