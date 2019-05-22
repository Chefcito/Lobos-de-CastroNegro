import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App/App';
import SplahPage from './components/SplahPage/SplahPage';
import WaitingPage from './components/WaitingPage/WaitingPage';
import ShowCharacter from './components/ShowCharacter/ShowCharacter';
import SingIn from './components/Sing/SingIn';
import SingUp from './components/Sing/SingUp';

  const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={SplahPage} />
            <Route path="/SingIn" component={SingIn} />
            <Route path="/SingUp" component={SingUp} />
            <Route path="/Waiting" component={WaitingPage} />
            <Route path='/ShowCharacter' component={ShowCharacter}/>
            <Route exact path="/App" component={App} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
