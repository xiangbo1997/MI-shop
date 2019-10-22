import React,{Component} from 'react'

import { NavBar, Icon, List, Stepper } from 'antd-mobile';
import './index.less'
import ShopCarItem from '../../components/ShopCarItem/ShopCarItem'
import GoBuytoComputed from '../../components/GoBuytoComputed/GoBuytoComputed';
import ShopList from '../ShopList/ShopList';
import { Link, Route, withRouter, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import BScroll from 'better-scroll';
class Shoppingcart extends Component {
  constructor(props){
    super(props)
    this.state={
      //获取localStorage中的存储的用户数据
      userMessage: localStorage.getItem('userMessage'),
      //商品的个数：
      shopNum:1,
    }
  }
   componentDidMount(){
    // const result = await axios.get('http://localhost:5000/firstpage')
    // console.log(result)
    //使用better-scroll
    let wrapper = document.querySelector('.shop-car')
    let scroll = new BScroll(wrapper,{
      click:true
    })
    // setTimeout(() => {
    //   new BScroll(document.getElementById('shopcar'))
    // }, 1000);
    
  }
  //卸载购物车商品
  deleteShopItem(index){
    // ReactDOM.unmountComponentAtNode(document.getElementsByClassName('shop-car-item')[index])
    document.getElementsByClassName('shop-car-item')[index].style.display = "none"

  }

  render () {
    return (
      <div className="shop-car" id="shopcar">
       <div>
          {/* 头部 */}
          <div className="header">
            {/* antd的导航组件 */}
            {/* <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            ]}
          >购物车</NavBar> */}
            <Link to="/home" className="goback">&lt;</Link>
            <div className="shopcar">购物车</div>
            <Link to="/home" className="search">
              <img src="https://static.easyicon.net/preview/122/1225492.gif" alt="" />
            </Link>
          </div>
          {/* 登录后享受更多优惠 */}
          <div className={this.state.userMessage ? 'login-get-more hidden' : 'login-get-more '}>
            <span className="login-later"> 登录后享受更多优惠</span>
            <span className="go-login">去登陆></span>
          </div>
          {/* 具体加入购物车的商品 */}
          <div className="shop-car-item">
            <ShopCarItem deleteShopItem={this.deleteShopItem} />
          </div>
          {/* <div className="shop-car-item">
          <ShopCarItem />
        </div>
        <div className="shop-car-item">
          <ShopCarItem />
        </div> */}

          {/* 购物车还是空的 */}
          <div className={this.state.shopNum === 0 ? 'shop-car-empty' : 'shop-car-empty hidden'}>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571512281955&di=88709851a52bc28c55ee3724417eca57&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F61%2F12%2F5876fc5f91641_610.jpg" alt="" />
            <span>购物车还是空的</span>
            <div className="go-look">去逛逛</div>
          </div>

          <div className="suggest">
            温馨提示：产品是否购买成功，以最终下单为准，请尽快结算
        </div>
          {/* 猜你喜欢 */}
          <div className="guest-youlike">
            <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" />
          </div>
          {/* 推荐列表 */}
          <div className="shoplist">
            <ShopList />
          </div>
          <div className="shoplist">

            <ShopList />
          </div>
          <div className="shoplist">

            <ShopList />
          </div>
          {/* <ul className="shop-list">
          <li className="shop-item">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
            <div className="desc">Redmi 8A 3GB+32GB</div>
            <div className="price">￥699</div>
          </li>
          <li className="shop-item">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
            <div className="desc">Redmi 8A 3GB+32GB</div>
            <div className="price">￥699</div>
          </li>
          <li className="shop-item">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
            <div className="desc">Redmi 8A 3GB+32GB</div>
            <div className="price">￥699</div>
          </li>
          <li className="shop-item">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
            <div className="desc">Redmi 8A 3GB+32GB</div>
            <div className="price">￥699</div>
          </li>
        </ul> */}
          
       </div>
        {/* 结算 */}
        <div className="go-buy-to-computed">
          <GoBuytoComputed />
        </div>
      </div>
    )
  }
}

export default Shoppingcart;