import AllRoutes from "./Allroutes/AllRoutes";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="radial-bg">
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <AllRoutes />
    </div>
  );
}

export default App;
