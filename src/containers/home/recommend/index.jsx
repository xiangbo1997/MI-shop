import React, { Component } from 'react'
import './index.less'
class Recommend extends Component {
  render() {
    return (
      <div className="container">
        <ul className="swiper">
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/46ea854a06fe30bb930a3b4b426e8c08.jpg?thumb=1&w=720&h=360" alt="" /></li>
        </ul>
        <ul className="recommend_list">
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152" alt="" /> </li>
          <li><img src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6eb2a9a73687e007daf30fc3f85e0ad2.gif" alt="" /> </li>
          <li><img src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp" alt="" /> </li>
          <li><img src="//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b14da225c4156d5ce9a78e42a3a5a8e7.jpg?thumb=1&w=144&h=152" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6d920e80a63e80edb21febdb266448.png?thumb=1&w=144&h=152" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4943684b6c577a6a0b9b141633f6bd.png?thumb=1&w=144&h=152" alt="" /> </li>
          <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152" alt="" /> </li>
        </ul>
        <div className="littlerace"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20f58279ee1653eae48464e5ec137b47.jpg?thumb=1&w=720&h=280" alt="" /></div>
        <ul className="phoneList">
          <li>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280" alt="" />
            <p>Redmi Note 8 Pro</p>
            <p className="phone_px">6400万全场景四摄</p>
            <p className="phone_money">￥1399起</p>
            <button className="phone_btn">立即购买</button>
          </li>
          <li>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280" alt="" />
            <p>Redmi Note 8</p>
            <p className="phone_px">千元4800万四摄</p>
            <p className="phone_money">￥999起</p>
            <button className="phone_btn">立即购买</button>
          </li>
          <li>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc1255fd3e70b6cdd6409627ca59d3f7.jpg?thumb=1&w=344&h=280" alt="" />
            <p>Redmi K20 Pro  </p>
            <p className="phone_px">骁龙855， 弹出全面屏</p>
            <p className="phone_money">￥2299起</p>
            <button className="phone_btn">立即购买</button>
          </li>
          <li>
            <img src="//i8.mifile.cn/v1/a1/86143982-11ca-5249-e90c-eecfdb9b98a0.webp" alt="" />
            <p >Redmi K20 </p>
            <p className="phone_px">弹出全面屏，4800万三摄</p>
            <p className="phone_money">￥1799起</p>
            <button className="phone_btn">立即购买</button>
          </li>
        </ul>
      </div>
    )
  }
}
export default Recommend;