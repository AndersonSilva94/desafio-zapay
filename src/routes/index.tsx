import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PastLaunch from '../pages/PastLaunch';
import NextLaunch from '../pages/NextLaunch';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/past" element={<PastLaunch />} />
      <Route path="/next" element={<NextLaunch />} />
    </Switch>
  );
}

export default Routes;
