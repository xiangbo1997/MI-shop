import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './index.less'
import '../../assets/iconfont.css'
import routes from '../../config/routes'
class Footer extends Component {
  render() {
    return (
      <Router>
      
          <ul className="footer">
            <li><Link to="/home"><i className="iconfont icon-home" /> <p>首页</p></Link></li>
            <li><Link to="/entry"> <i className="iconfont icon-icon_category" /><p>分类</p></Link></li>
            <li><Link to="/shoppingcart"><i className="iconfont icon-gouwuche-xianxing" /><p>购物车</p></Link></li>
            <li><Link to="/login"><i className="iconfont icon-user" /><p>我的</p></Link></li>
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
