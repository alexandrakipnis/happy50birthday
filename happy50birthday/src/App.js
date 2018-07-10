import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Message from './Message'
import Album from './Album'
import Puppies from './Puppies'
import DecisionMaker from './DecisionMaker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://rawgit.com/alexandrakipnis/photos/master/Webp.net-gifmaker%20(1).gif' alt=""/>
          <h1>Gary Kipnis</h1>
          <img src='https://rawgit.com/alexandrakipnis/photos/master/Webp.net-gifmaker%20(1).gif' alt=""/>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/message">A Message</NavLink>
          </li>
          <li>
            <NavLink to="/album">Photos</NavLink>
          </li>
          <li>
            <NavLink to="/puppies">Puppies</NavLink>
          </li>
          <li>
            <NavLink to="/decisionmaker">Decision Maker</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/message" component={Message} />
          <Route path="/album" component={Album} />
          <Route path="/puppies" component={Puppies} />
          <Route path="/decisionmaker" component={DecisionMaker} />

          <Route render={() => <p> To explore your 50th birthday website, click on one of the tabs above.</p>}/>
        </Switch>
      </div>
    )
  }
}
export default App
