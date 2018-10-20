import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Workout from './Workout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="vh-100">
          <Header />
          <Route path="/a1" render={() => <Workout lifts={['Squat', 'Bench', 'Lat Pulldown']} />}/>
          <Route path="/b1" render={() => <Workout lifts={['Overhead Press', 'Deadlift', 'Dumbbell Row']} />}/>
          <Route path="/a2" render={() => <Workout lifts={['Bench', 'Squat', 'Lat Pulldown']} />}/>
          <Route path="/b2" render={() => <Workout lifts={['Deadlift', 'Overhead Press', 'Lat Pulldown']} />}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
