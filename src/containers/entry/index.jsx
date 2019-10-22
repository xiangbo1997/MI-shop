import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './less/index.less'
import BScroll from 'better-scroll'
class Entry extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    Bscroll: '',
    navIndex: 0,
    scrollY: 0,
    tops: []
  }
  componentDidMount() {
    const wrapper = this.refs.wrapper
    const scroll = new BScroll(wrapper, {
      scrollX: false,
      click: true,
      scrollY: true,
      probeType: 1
    })
    this.setState({
      Bscroll: scroll,
    })
    this.initTops()
    console.log(this.state.tops)
    //监听滚动
    scroll.on('scroll', ({ x, y }) => {
      this.scrollY = Math.abs(y)
      console.log(this.scrollY)
    })
    scroll.on('scrollEnd', ({ x, y }) => {
      this.scrollY = Math.abs(y)
    })
  }
  //初始化高度数组
  initTops = () => {
    const tops = []
    let top = 0
    tops.push(top)
    const list = this.refs.rightList.children
    Array.prototype.slice.call(list).forEach(item => {
      top += item.clientHeight
      tops.push(top)
    })
    this.state.tops = tops
  }
  //点击切换导航
  changeIndex = (index) => {
    return () => {
      this.setState({
        navIndex: index
      })
      // console.log(index)
      console.log(this.state.navIndex)
    }
  }
  componentWillUpdate() {
    console.log('hha1')
    const { scrollY, tops } = this.state
    const index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
    console.log(index)
    if(this.state.navIndex!==index){
      this.setState({
        navIndex:index
      })
    }
    console.log(this.state.navIndex)
  }
  render() {
    return (
      <div className="entry">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
          ]}
        >分类
      </NavBar>
        <div className="entry-content">
          <div className="leftWrapper">
            <ul className="entry-left-list">
              {['新品', '众筹', '手机'].map((item, index) => {
                return (
                  <li key={index} onClick={this.changeIndex(index)} className={`${this.state.navIndex === index ? 'current' : ''}`}>{item}</li>
                )
              })}
              {/* <li className="current">新品</li>
            <li>众筹</li>
            <li>手机</li>
            <li>电视</li>
            <li>新品</li>
            <li>众筹</li>
            <li>手机</li>
            <li>电视</li> */}
            </ul>
          </div>
          <div className="rightWrapper" ref="wrapper">
            <div className="entry-content-right" ref="rightList">
              <div className="rightContent">
                <div className="title">手机</div>
                <ul className="rightUl">
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                </ul>
              </div>
              <div className="rightContent">
                <div className="title">手机</div>
                <ul className="rightUl">
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                </ul>
              </div>
              <div className="rightContent">
                <div className="title">手机</div>
                <ul className="rightUl">
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                  <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt="" />
                    <p>小米9</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Entry;