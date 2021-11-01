import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBody from "./pages/MainBody/MainBody";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
