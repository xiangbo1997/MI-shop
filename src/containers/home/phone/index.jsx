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
            <li><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f9d3e1d3ad599c4fd83b73be4cefa09.jpg?thumb=1&w=720&h=360" alt="" /></li>
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