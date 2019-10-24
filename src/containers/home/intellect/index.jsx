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
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f8a06ae0dc6a02b130873db21acfac3.jpg?thumb=1&w=720&h=360" alt="" /></li>
          </ul>
          <ul className="recommend_list">
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152" alt="" /> </li>
            <li><img src="//i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp" alt="" /> </li>
            <li><img src="//i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp" alt="" /> </li>
            <li><img src="//i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp" alt="" /> </li>
            <li><img src="//i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152" alt="" /> </li>
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152" alt="" /> </li>
          </ul>
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