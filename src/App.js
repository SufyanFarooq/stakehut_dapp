import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/locking/navbar/navbar";
import Sidebar from "./components/locking/navbar/sidebars";
import { NavigationBar } from "./components/locking/navbar/NavigationBar";

import Index from "./contaner/Index";
import Home from "./contaner/Home";
import IndexWithout from "./contaner/IndexWithout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Navbar />

            <Sidebar />
          </ul>
        </nav>
        <Switch>
          <Route path="/without">
            <IndexWithout />
          </Route>
          <Route path="/locking">
            <Index />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
