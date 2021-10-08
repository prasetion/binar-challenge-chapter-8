import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPlayerPage";
import EditPlayerPage from "./routes/EditPlayerPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/editplayer">
            <EditPlayerPage />
          </Route>
          <Route path="/player">
            <SearchPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
