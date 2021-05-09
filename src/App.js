
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Newsfeed from './pages/Newsfeed';
import Postpage from './pages/PostPage';

function App () {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/postPage/:postId'>
            <Postpage />
          </Route>
          <Route path='/'>
            <Newsfeed />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
