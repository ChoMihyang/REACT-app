import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Write from "./routes/Write";
import List from "./routes/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
