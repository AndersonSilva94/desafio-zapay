import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import OldLaunch from '../pages/OldLaunch';
import NextLaunch from '../pages/NextLaunch';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/old" element={<OldLaunch />} />
      <Route path="/next" element={<NextLaunch />} />
    </Switch>
  );
}

export default Routes;
