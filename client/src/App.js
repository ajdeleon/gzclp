import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Workout from './Workout'
import { connect } from 'react-redux'
import * as actions from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(1)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="vh-100">
          <Header />
          <Route
            path="/a1"
            render={() => (
              <Workout
                workout="a1"
                lifts={['Squat', 'Bench', 'Lat Pulldown']}
              />
            )}
          />
          <Route
            path="/b1"
            render={() => (
              <Workout
                workout="a2"
                lifts={['Overhead Press', 'Deadlift', 'Dumbbell Row']}
              />
            )}
          />
          <Route
            path="/a2"
            render={() => (
              <Workout
                workout="b1"
                lifts={['Bench', 'Squat', 'Lat Pulldown']}
              />
            )}
          />
          <Route
            path="/b2"
            render={() => (
              <Workout
                workout="b2"
                lifts={['Deadlift', 'Overhead Press', 'Lat Pulldown']}
              />
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  actions
)(App)
