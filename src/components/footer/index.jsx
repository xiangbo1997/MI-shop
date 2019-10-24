import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route,Redirect} from 'react-router-dom';
import Entry from '../../containers/entry'
import Home from '../../containers/home'
import ShoppingCart from '../../containers/shoppingcart'
import ShopDetail from '../../containers/ShopDetail/ShopDetail'
import Profile from '../../containers/profile'
import './index.less'
import routes from '../../config/routes'
import '../../assets/iconfont.css'
// import {withRouter} from 'react-router-dom'
// @withRouter
class Footer extends Component {
  render() {
    return (
      <Router>
       
          <ul className="footer">
            <li><NavLink to="/home" className="" activeClassName="active"  activeStyle={{color: '#ED5B00'}}><i className="iconfont icon-home" /> <p>首页</p></NavLink></li>
            <li><NavLink to="/entry" activeStyle={{color: '#ED5B00'}}> <i className="iconfont icon-icon_category" /><p>分类</p></NavLink></li>
            <li><NavLink to="/shoppingcart" activeStyle={{color: '#ED5B00'}}><i className="iconfont icon-gouwuche-xianxing" /><p>购物车</p></NavLink></li>
            <li><NavLink to="/profile" activeStyle={{color: '#ED5B00'}}><i className="iconfont icon-user" /><p>我的</p></NavLink></li>
          </ul>
          <Switch>
            {
              routes.map((route, index) => {
                // return <Route path={route.path} exact={route.exact} component={route.component}/>
                return <Route {...route} key={index}/>;
              })
            }
            {/* 不写path 就是匹配所有路径 */}
           
          </Switch>

      
       
        
      </Router>
      
    )
  }
}
export default Footer
