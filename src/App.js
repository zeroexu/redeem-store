import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './containers/index'
import './App.scss'

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path='/' component={Index} />
      <Route path='/page/:index' component={Index} />
    </Switch>
  </BrowserRouter>
}

export default App;
