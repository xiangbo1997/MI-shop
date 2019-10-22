import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Phone from './phone'
import Intellect from './intellect'
import Notebook from './notebook'
import Recommend from './recommend'
import Homeelectric from './homeelectric'
import Search from '../../components/search'
import Tv from './tv'
import './index.less'
class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Search />
          <ul className="nav">
            <li><Link to="/home/recommend">推荐</Link></li>
            <li><Link to="/home/phone"> 手机</Link></li>
            <li><Link to="/home/intellect">智能</Link></li>
            <li><Link to="/home/tv">电视</Link></li>
            <li><Link to="/home/notebook">笔记本</Link></li>
            <li><Link to="/home/homeelectric">家电</Link></li>
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
        </div>

      </Router>
    )
  }
}

export default Home;