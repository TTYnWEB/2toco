// IMPs - ExtLib
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
// IMPs - local
import Home     from '../components/Home';
import Redir    from '../components/Redir';
import Settings from '../components/Settings';
import NotFound from '../components/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:guid([a-z])">
          <Redir />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}
