import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/quiz' component={Quiz} />
    </Switch>
  </Router>
)

export default App
