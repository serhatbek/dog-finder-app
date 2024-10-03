import "./scss/index.scss";
import { Background, Footer, Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Compare, MyList, Pokemon, Search } from "./pages";

function App() {
  return (
    <div className="main-container">
      <Background />
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
