// IMPs - ExtLib
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
// IMPs - local
import Home     from './Home';
import Redir    from './Redir';
import NotFound from './NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:guid([a-z])">
          <Redir />
        </Route>
        <Route exact path="/">
          <Home />
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
