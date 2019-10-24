import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import Swiper from 'swiper';
import   'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper.js';
import {Link,Route,withRouter,Redirect,Switch} from 'react-router-dom';
//
import { Toast, WhiteSpace, Button } from 'antd-mobile';

import './index.less';
import utilsFunc from '../../util/index';
import BScroll from 'better-scroll';
import store from '../../redux/store.js'
//redux
import { addShop} from '../../redux/action-creators';
import { previewImage } from 'antd/lib/upload/utils';
@withRouter
class ShopDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            // 是否显示选择商品的那个遮罩
            isShowChooseShop:false,
            //购买数量
            // buyNum:0,
            //颜色
            color:true,
            //版本
            version:true,
            //具体的商品对象
            shop:null
        }
    }
  componentDidMount(){
      
        //滑动
      let wrapper = document.querySelector('.shop-detail')
      this.scroll = new BScroll(wrapper, {
          click: true
      })
    //   console.log(this.props.location,'---------------')
    //如果路由传参了就用，并且存储到本地，如果刷新了，那么取出来即可
    const {query} = this.props.location
    if(query){
        localStorage.setItem('showShop',JSON.stringify(query.item))
        this.setState({
            shop: query.item 
        })

    }else{
        this.setState({
            shop: JSON.parse(localStorage.getItem('showShop'))
        })
        // console.log(this.state.shop,'..............')

    }
    setTimeout(() => {
        //   轮播图
        new Swiper('.swiper-container', {
            speed: 400,
            autoplay: 5000,
            loop: true,
        });   
    }, 0);
    
    // console.log(this.state.shop)
    //   setTimeout(() => {
    //       if (this.props.location.query) {
    //          this.setState({
    //              shop:this.props.location.query.item
    //          })
    //       }
    //   }, 0);
    //   console.log(this.state.shop, '-------------------
       
    }
     componentDidUpdate(){
         const { shops} = store.getState()
        // console.log(shops)

     }
    //样例函数
    func = () => {

    }
    //选择商品的具体型号
    showchooseshop=()=>{
        this.setState({
            isShowChooseShop:!this.state.isShowChooseShop
        })
    }
    // 点击滚动到最上方
    goTop=()=>{
        // scrollTo(0, 0);
        // this.refs.shopDetail.style.transform =`translateY(-${this.refs.shopDetail.scrollTop})`
    }


    //真正的加入购物车!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    realjoinShopCar=()=>{
        //选择界面消失
        this.showchooseshop();
        // this.setState({
        //     buyNum:++this.state.buyNum
        // })
        //提示加入购物车成功
        Toast.success('加入购物车成功', 1);
        // alert("成功加入购物车")
        const {shop} = this.state 
        shop.isChecked=true
        const action = addShop(shop)
        store.dispatch(action)
        // console.log()

        

    }
    // 选择不同的版本
    changeVersion=(num)=>{
        this.setState({
            version:num
        })
    }
    // 选择不同的颜色
    changeColor = (num) => {
        this.setState({
            color: num
        })
    }

    //回到上一页
    goPrevPage=()=>{
        this.props.history.goBack()
    }
    //回到首页goHome
    goHome=()=>{
        // this.props.history.push('/home')
    }
    componentDidUpdate(){
      
    }
    render() {
        //获取当前的商品
        const { shop } = this.state
        //获取购物车中的商品
        const { shops } = store.getState()
        //计算购物车中的数量
        // const shopsNumber = store.getState().shops.reduce((prev,now)=>{
        //     return (prev.num ? prev.num : 0 + now.num)
        // },0)
        let shopsNumber = store.getState().shops.length
        return (
            <div className="shop-detail" ref="shopDetail" >
                <div>
                    {/* 轮播图 */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* <div className="swiper-slide">
                                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a383b1827f4cc410c4067fc89324334.jpg" alt="" />
                            </div> */}
                            {
                                shop ? shop.swiperImg.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                }):''
                            }
                           

                        </div>
                    </div>
                    {/*返回按钮  */}
                    <div className="goback" onClick={this.goPrevPage}>&lt;</div>
                    {/* 分享按钮 */}
                    {/* <div className="share">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1227208152,323699653&fm=26&gp=0.jpg" alt=""/>
                    </div> */}
                    <div className="share">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1227208152,323699653&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="desc">
                        <div className="shop-name">
                            {shop ?shop.name : ''}
                    </div>
                        <div className="good-desc">
                            <span className="new">「新品上市！加29.9元得18W快充头；前3500名评论晒单赢贴膜」</span>
                            <span>
                                {shop ? shop.content : ''}
                            </span>
                        </div>
                        <div className="price">￥{shop ? shop.price : ''}</div>
                        <ul className="mobile-content">
                            <li >
                                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png" alt="" />
                                <span>CPU</span>
                                <span>高通骁龙439</span>
                            </li>
                            <li >
                                <img src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png" alt="" />
                                <span>双摄像头</span>
                                <span>1200万+200万</span>
                            </li>
                            <li >
                                <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png" alt="" />
                                <span>超大屏</span>
                                <span>6.22英寸</span>
                            </li>
                            <li >
                                <img src="https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png" alt="" />
                                <span>屏幕分辨率</span>
                                <span>1520*720</span>
                            </li>
                        </ul>

                    </div>
                    {/* 选择商品具体类别 */}
                    <div className="change-category">
                        <div className="choose" onClick={this.showchooseshop}>
                            <span className="haveChange">已选</span>
                            <span>{shop?shop.version[0] +shop.color[0]:''}</span>
                            <span className="more firstgo">></span>
                        </div>
                        <div className="address">
                            <span className="haveChange">送至</span>
                            <span>北京市 东城区</span>
                            <span>有现货</span>
                            <span className="more">></span>
                        </div>
                        <div className="other">
                            <div className="other-item">
                                <img className="first" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" alt="" />
                                <span>小米自营</span>
                            </div>
                            <div className="other-item">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" alt="" />
                                <span>小米发货</span>
                            </div>
                            <div className="other-item">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" alt="" />
                                <span>7天无理由退款</span>
                            </div>
                            <span className="more">...</span>

                        </div>


                    </div>


                    {/* 评论 */}
                    <div className="comment-wrap">
                        <div className="comment">
                            <div className="comment-header">
                                <div className="avator">
                                    <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01yvCgrtxrf/iykbT0C58mQAX1.jpg" alt="" />
                                </div>
                                <div className="message">
                                    <div className="name">七七七</div>
                                    <div className="time">2019-03-20</div>

                                </div>
                                <div className="pointgood">
                                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3787727293,2495081567&fm=26&gp=0.jpg" alt="" />
                                    <span>533</span>
                                </div>
                            </div>
                            <div className="comment-content">
                                <div className="comment-write">
                                    离我的小米智能之家又近了一步，安装师傅专业细致，原门锁挡片不是很贴合，师傅...
                            </div>
                                <div className="comment-pic">
                                    <img src="//i1.mifile.cn/a2/1553069053_8104480_s1008_567wh!540x5400.jpg" alt="" />
                                    <img src="//i1.mifile.cn/a2/1553069053_8104480_s1008_567wh!540x5400.jpg" alt="" />
                                    <img src="//i1.mifile.cn/a2/1553069053_8104480_s1008_567wh!540x5400.jpg" alt="" />
                                </div>

                            </div>
                            <div className="mi-comment">
                                <span className="mi">官方回复:</span>
                                <span>小米力争做到感动人心，价格厚道，让每个人都能享受科技带来的乐趣。感谢您...</span>
                            </div>
                        </div>
                    </div>
                    <div className="more-comment">
                        更多评论>
                    </div>
                    {/* 长图片 */}
                    <div className="total">
                        {/* <img className="small-pic" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3a3e8adcdfc76a6d876f86adf030fce.jpg?f=webp&w=1080&h=634&bg=FFFFFF" alt="" /> */}
                        {/* <img className="long-pic" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed9e168a1006f1a54f4e7a7ebd9b2738.jpg?f=webp&w=1080&h=1531&bg=FBFFFF" alt="" /> */}
                        {shop ? this.state.shop.Img.map((item,index)=>{
                            return (
                                <img className="long-pic" src={item} alt="" key={index}/>
                            )
                        }):''}
                        <img className="long-pic" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e86e9e9eac2696750e9a207beb4bb4c.jpeg?f=webp&w=1080&h=1322&bg=FFFFFF" alt="" />
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427" alt="" />

                    </div>

                    {/* 点击直接回滚到最上方 */}
                    {/* <div className="goTop" onClick={this.scroll.scrollTo(0, 0, 500)}>
                        <img src="http://img.lanrentuku.com/img/allimg/1206/5-120601160002-50.png" alt="" />
                    </div> */}

                    
                    </div>
                {/* 底部的加入购物车 */}
                <div className="joinShopCar">
                    <Link to="/home" className="home" >
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1254235152,4006777381&fm=26&gp=0.jpg" alt="" />
                        <span>首页</span>
                    </Link>
                    <Link to="/shoppingcart" className="shop-car">
                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3145400242,3480648158&fm=26&gp=0.jpg" alt="" />
                        <span>购物车</span>
                    </Link>
                    <div className="join-shopcar" onClick={this.showchooseshop}>
                        加入购物车
                        </div>
                        
                    {/* <div className={this.state.buyNum === 0 ? 'have-shop hidden' : 'have-shop'}>
                        {this.state.buyNum}
                    </div> */}
                    
                    <div className={shopsNumber === 0 ? 'have-shop hidden' : 'have-shop'}>
                        {shopsNumber}
                    </div>
                    {/* 点击加入购物车的弹窗 */}
                    <div className={this.state.isShowChooseShop ? 'choose-connect' : 'choose-connect hidden'} ref="chooseConnect">
                        <div className="mask-item" onClick={this.showchooseshop}>
                            {/* 222222222222222 */}
                        </div>
                        <div className="content">
                            <div className="content-top">
                                <div className="content-left">
                                    <img src={shop ? shop.entryImg:''} alt="" />
                                </div>
                                <div className="content-right">
                                    <span className="price">￥{shop?shop.price:''}</span>
                                    <span className="version-content">{shop ? shop.name : ''}  {shop ? this.state.version ? shop.version[1] : shop.version[0]:''} 
                                        {shop ? this.state.color ? shop.color[0] : shop.color[1] : ''}
                                    </span>
                                </div>
                            </div>
                            <div className="other">
                                <div className="other-item">
                                    <span>版本</span>
                                    <div className="version">
                                        <div className={this.state.version ? 'version-item active' : 'version-item'}
                                            onClick={() => this.changeVersion(1)}>
                                            {this.state.shop?this.state.shop.version[0]:''}
                                        </div>
                                        <div className={this.state.version ? 'version-item' : 'version-item active'}
                                            onClick={() => this.changeVersion(0)}>
                                            {this.state.shop ? this.state.shop.version[1] : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="other-item">
                                    <span>颜色</span>
                                    <div className="version">
                                        <div className={this.state.color ? 'version-item active' : 'version-item'}
                                            onClick={() => this.changeColor(1)}>
                                            {this.state.shop ? this.state.shop.color[0] : ''}
                                        </div>
                                        <div className={this.state.color ? 'version-item ' : 'version-item active'}
                                            onClick={() => this.changeColor(0)}>
                                            {this.state.shop ? this.state.shop.color[1] : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="other-item">
                                    <span>套餐</span>
                                    <div className="version">
                                        <div className="version-item active">
                                            标配
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="join-shop-car-now" onClick={this.realjoinShopCar}>
                                加入购物车
                            </div> */}
                            <Button className="join-shop-car-now" onClick={this.realjoinShopCar}>点击加入购物车</Button>
                            <div className="close" onClick={this.showchooseshop}>
                                X
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>
        )
    }
}

export default ShopDetail;