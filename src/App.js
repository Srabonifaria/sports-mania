import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import NoMatch from './Components/NoMatch/NoMatch';
import LeagueDetails from './Components/LeagueDetail/LeagueDetails';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Homepage/>
        </Route>
        <Route path="/leagueDetails/:idLeague">
          <LeagueDetails/>
        </Route>
        <Route path="*">
        <NoMatch/>
        </Route>
        <Route path="/">
        <Homepage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
