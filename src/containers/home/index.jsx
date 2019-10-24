import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route ,NavLink} from 'react-router-dom';
// import {gethome_pages} from '../../redux/action-creators'
// import {connect} from 'react-redux'
// import axios from 'axios'
import Phone from './phone'
import Intellect from './intellect'
import Notebook from './notebook'
import Recommend from './recommend'
import Homeelectric from './homeelectric'
import Search from '../../components/search'
import {withRouter} from 'react-router-dom'
import Tv from './tv'
import './index.less'
class Home extends Component {
  render() {
    return (
      <Router>
        
          <Search />
          <ul className="nav" ref="navlist">
          <li ><NavLink to="/home/recommend" className="" activeClassName="active"  activeStyle={{color: '#ED5B00'}}>推荐</NavLink></li>
          <li ><NavLink to="/home/phone" className="" activeClassName="active"  activeStyle={{color: '#ED5B00'}}> 手机</NavLink></li>
          <li ><NavLink to="/home/intellect" className="" activeClassName="active"  activeStyle={{color: '#ED5B00'}}>智能</NavLink></li>
          <li ><NavLink to="/home/tv" className="" activeClassName="active" activeStyle={{color: '#ED5B00'}}>电视</NavLink></li>
          </ul>
          <Switch>
            <Route path="/home/phone">
              <Phone />
            </Route>
            <Route path="/home/recommend">
              <Recommend />
            </Route>
            <Route path="/home/intellect">
              <Intellect />
            </Route>
            <Route path="/home/tv">
              <Tv />
            </Route>
            <Route path="/home/notebook">
              <Notebook />
            </Route>
            <Route path="/home/homeelectric">
              <Homeelectric />
            </Route>
          </Switch>
          
        
      </Router>
      
    )
  }
}

export default Home ;