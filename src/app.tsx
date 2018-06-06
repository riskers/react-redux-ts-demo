import * as React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '@/pages/Home';
import Count from '@/pages/Count';
import Async from '@/pages/Async';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/count" component={Count} />
        <Route path="/async" component={Async} />
      </div>
  </Router>
));
