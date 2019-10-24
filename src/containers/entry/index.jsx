import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './less/index.less'
import BScroll from 'better-scroll'
import moduleName from 'axios';
import Axios from 'axios';
import {withRouter}from 'react-router-dom'
@withRouter
class Entry extends Component {
  state = {
    Bscroll: '',
    navIndex: 0,
    scrollY: 0,
    tops: [],
    list: []
  }
  async componentDidMount() {
    const result = await Axios.get('http://localhost:5000/list')
    this.setState({
      list: result.data.entrylist
    })
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

    // console.log(this.state.list[0].list)

  }
  //去商品详情页
  gotoDetail = (item) => {
    console.log(1)
    this.props.history.push({ pathname: '/shopdetail', query: { item } })
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
    if (this.state.navIndex !== index) {
      this.setState({
        navIndex: index
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
              {this.state.list.map((item, index) => {
                return <li key={index}>{item.name}</li>
              })}
            </ul>
          </div>
          <div className="rightWrapper" ref="wrapper">
            <div className="entry-content-right" ref="rightList">
            {
                this.state.list.map((item,index)=>{
                  return (
                     <div className="rightContent" key={index}>
                       <div className="title">{item.name}</div>
                       <ul className="rightUl">
                         {
                           item.list.map((li,index)=>{
                             return (
                               <li key={index} onClick={() => this.gotoDetail(li)}>
                                 <img src={li.entryImg} alt=""/>
                                 <p>{li.name}</p>
                               </li>
                             )
                           })
                         }
                       </ul>
                     </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Entry;
{/* <div className="rightContent">
              
</div> */}