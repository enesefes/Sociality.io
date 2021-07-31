import "./styles.css";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";

export default function App() {
  return (
    <div className="App">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Status bar and profile pic. */}
        <Page />
        {/* Content */}
      </div>
    </div>
  );
}
