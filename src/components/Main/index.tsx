import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../Login';
import { VideoList } from '../VideoList';
import { VideoPage } from '../VideoPage';

export const Main: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/video-list'>
          <VideoList />
        </Route>
        <Route path='/video-page/:id([a-z0-9A-Z]+)'>
          <VideoPage />
        </Route>
        <Route exact path='/video-page'>
          <Redirect to='/video-list' />
        </Route>
      </Switch>
    </Router>
  )
}
