import React,{Component} from 'react'
import './less/index.less'

class Profile extends Component {
  state={

  }
  goToShopDetail=()=>{
   
    this.props.history.push('/shopdetail');
  }
  goToshopCar=()=>{
    this.props.history.push('/shoppingcart');
  }

  goToMistake=(e)=>{
    return()=>{
      this.props.history.push('/profile/profileMistake',e);
      // console.log(e)
    }
  }
  render () {
    return (
      <div className="profile-warp">
        <div className="profile-header">
          <div className="header-top">
            <div className='top-warp'>
              <div className="top-left"><i className="iconfont icon-user" id="left-user"></i></div>
              <div className="top-right">1111111</div>
            
           
            </div>
          </div>
          <div className="header-center">
            <div className="center-left">我的订单</div>
            <div className="center-right" onClick={this.goToShopDetail}>全部订单<span> > </span></div>

          </div>
          <div className="header-bottom">
              <ul className='list-item' onClick={this.goToshopCar}>
                <li>
                  <i className="iconfont icon-daifukuan1"></i>
                  <p>待付款</p>
                </li>
                <li>
                <i className="iconfont icon-daishouhuo1"></i>
                  <p>待收货</p>
                </li>
                <li>
                <i className="iconfont icon-dashujukeshihuaico-"></i>
                  <p>退换修</p>
                </li>
              </ul>
          </div>


        
        </div>
        <div className="profile-container">
          <ul onClick={this.goToMistake('q123')}>
            <li>
              <div className="container-left"> <i className="iconfont icon-huiyuan1"></i></div>
              <div className="container-right">
                <div>会员中心</div>
               <span> > </span></div>
            </li>
            <li>
            <div className="container-left"> <i className="iconfont icon-daifukuan"></i></div>
              <div className="container-right bottom-none">会员中心 <span> > </span></div>
            </li>
          </ul>
          <ul onClick={this.goToMistake('q3423')}>
            <li>
              <div className="container-left"> <i className="iconfont icon-fuwu"></i></div>
              <div className="container-right">
                <div>服务中心</div>
               <span onClick={this.goToShopDetail}> > </span></div>
            </li>
            <li>
            <div className="container-left"> <i className="iconfont icon-home"></i></div>
              <div className="container-right bottom-none">小米之家 <span> > </span></div>
            </li>
          </ul>
          <ul onClick={this.goToMistake('q234')}>
            <li>
              <div className="container-left"> <i className="iconfont icon-youhui"></i></div>
              <div className="container-right">
                <div>我的F码</div>
               <span> > </span></div>
            </li>
            <li>
            <div className="container-left"> <i className="iconfont icon-liwu"></i></div>
              <div className="container-right bottom-none">礼物码兑换 <span> > </span></div>
            </li>
          </ul>
          <ul id="last" onClick={this.goToMistake('q456')}>
            
            <li>
            <div className="container-left"> <i className="iconfont icon-huiyuan2"></i></div>
              <div className="container-right bottom-none">会员中心 <span> > </span></div>
            </li>
          </ul>
        </div>
      
      </div>
    )
  }
}

export default Profile;