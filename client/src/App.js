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
          <Route path="/a1" render={() => <Workout t1lift="Squat" t2lift="Bench" t3lift="Lat Pulldown"/>}/>
          <Route path="/b1" render={() => <Workout t1lift="Overhead Press" t2lift="Deadlift" t3lift="Dumbbell Row"/>}/>
          <Route path="/a2" render={() => <Workout t1lift="Bench" t2lift="Squat" t3lift="Lat Pulldown"/>}/>
          <Route path="/b2" render={() => <Workout t1lift="Deadlift" t2lift="Overhead Press" t3lift="Dumbbell Row"/>}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
