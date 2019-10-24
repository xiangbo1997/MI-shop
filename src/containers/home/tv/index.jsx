import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gethome_pages } from '../../../redux/action-creators'
import BScroll from 'better-scroll'
import './index.less'
// import Search from 'antd/lib/transfer/search'
class Recommend extends Component {
  state = {
    phone: []
  }
  componentDidMount() {
    this.props.gethome_pages()
    let wrapper = this.refs.wrapper
    new BScroll(wrapper, {
      scrollY: true,
    })
  }
  render() {
    return (
      <div ref="wrapper">
        <div className="container" >
          <ul className="swiper">
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64b12b6393fc2456107ee273af9c7a97.jpg?thumb=1&w=720&h=360" alt="" /></li>
          </ul>
          <p className="text">热门推荐</p>
          <ul className="tv_list">
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/afb00007d93777fb6d3bb9839505fed4.jpg?thumb=1&w=240&h=164" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/627c662774c4d6d06132cd7270ec7229.jpg?thumb=1&w=240&h=164" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b594c32fa74f690b889d2af1d9808d.jpg?thumb=1&w=240&h=164" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e818d78a996e108eda7d9e12f98ca1b1.jpg?thumb=1&w=240&h=189" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/19e20d010ef1d83dbdf3bf35901d2b51.jpg?thumb=1&w=240&h=189" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f4eb97118752c6386ff9243a5e346a9.jpg?thumb=1&w=240&h=189" alt="" /> </li>
          </ul>
          <div className="littlerace"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20f58279ee1653eae48464e5ec137b47.jpg?thumb=1&w=720&h=280" alt="" /></div>
          <ul className="phoneList">
            {
              this.props.pages.data && Array.isArray(this.props.pages.data) && this.props.pages.data.map(function (item, index) {
                return <li key={index}>
                  <img src={item.phoneImg} alt="" />
                  <p>{item.name}</p>
                  <p className="phone_px">{item.phoneHeader}</p>
                  <p className="phone_money">{item.phonemoney}</p>
                  <button className="phone_btn">立即购买</button>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default connect(
  (state) => ({ pages: state.pages }),
  {
    gethome_pages
  }
)(Recommend);