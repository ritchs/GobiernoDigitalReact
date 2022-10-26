import React, { useEffect } from 'react';
import {Switch, Route ,useHistory} from 'react-router-dom';
import Home from './home';
import Detail from './detail';

const RitzCarlton = () => {
  const { url } = useHistory();
  return (
    <>
      <Switch>
        <Route exact path={url} component={Home} />
        <Route path={`${url}/detail/:query`} component={Detail} />
      </Switch>
    </>
  );
};

export default RitzCarlton;

