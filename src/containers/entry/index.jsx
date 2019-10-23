import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './less/index.less'
import BScroll from 'better-scroll'
import moduleName from 'axios';
import Axios from 'axios';
class Entry extends Component {
  state = {
    Bscroll: {},
    navIndex: 0,
    scrollY: 0,
    tops: [],
    list: [],
    scroller: undefined,
    scrollTo: 0,
  }
  async componentDidMount() {
    const result = await Axios.get('http://localhost:5000/list')
    this.setState({
      list: result.data.entrylist
    })
    const wrapper = this.refs.wrapper
    const scroll = new BScroll(wrapper, {
      click: true,
      probeType: 2
    })
    this.setState({
      Bscroll: scroll,
    })
    this.initTops()
    //监听滚动
    scroll.on('scroll', ({ x, y }) => {
        this.setState({
          scrollY: Math.abs(y)
        })
      console.log(this.state.scrollY)
    })
    scroll.on('scrollEnd', ({ x, y }) => {
      this.setState({
        scrollY: Math.abs(y)
      })
    })
    // this.setState({ scroller: scroll })
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
  //去商品详情页
  gotoDetail = (item) => {
    this.props.history.push({ pathname: '/shopdetail', query: { item } })
  }
  //点击切换导航
  changeIndex = (index) => {
    //console.log('changeIndex', index)
    //this.setState({ navIndex: index, scrollTo: index * 100 })
    //    scrollY: Math.abs(y)
      // this.setState({
      //   navIndex: index
      // })
     
      this.setState({
        navIndex: index
      })
      const scrollY = this.state.tops[index]
      this.state.scrollY = scrollY
      this.state.Bscroll.scrollTo(0,-scrollY,300)
      console.log(index)
      console.log(this.state.navIndex)
      //console.log(topIndex)

  }
  componentWillUpdate() {
    //第一加载页面时候 数组并没有初始化 所以需要先实例化一次
    this.initTops()
    const { scrollY, tops } = this.state
    const topIndex = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
    
    if (this.state.navIndex !== topIndex) {
      this.setState({
        navIndex: topIndex
      })
    }
    
    // if (this.state.scroller) {
    //   // this.state.scroller.scrollTo(0, this.state.scrollTo)
    // }
  }
  render() {
    const list = this.state.list.map((item, index) => {
        return <li key={index} className={`${this.state.navIndex === index ? 'current' : ''}`} onClick={() => this.changeIndex(index)} >{item.name}</li>
      
    })
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
              {list}
            </ul>
          </div>
          <div className="rightWrapper" ref="wrapper">
            <div className="entry-content-right" ref="rightList">
              {
                this.state.list.map((item, index) => {
                  return (
                    <div className="rightContent" key={index}>
                      <div className="title">{item.name}</div>
                      <ul className="rightUl">
                        {
                          item.list.map((li, index) => {
                            return (
                              <li key={index} onClick={() => this.gotoDetail(li)}>
                                <img src={li.entryImg} alt="" />
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