import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './less/index.less'
import BScroll from 'better-scroll'
import moduleName from 'axios';
import Axios from 'axios';
class Entry extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     Bscroll: '',
  //   }
  // }
  // componentDidMount() {
  //   const wrapper = document.querySelector('.entry-content')
  //   const scroll = new BScroll(wrapper, {
  //     scrollX: false,
  //     click: true,
  //     scrollY:true
  //   })
  //   this.setState({
  //     Bscroll: scroll,
  //   })
  // }
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  async componentDidMount() {
    const wrapper = this.refs.wrapper
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(wrapper, {
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true
    })
    const result = await Axios.get('http://localhost:5000/list')
    this.setState({
      list: result.data.entrylist
    })
    // console.log(this.state.list[0].list)

  }
  //去商品详情页
  gotoDetail = (item)=>{
    console.log(1)
    this.props.history.push({ pathname:'/shopdetail', query:{item}})
  }
  render () {
    return (
    <div className="entry">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px'}} />
        ]}
      >分类
      </NavBar>
      <div className="entry-content">
        <div className="leftWrapper">
          <ul className="entry-left-list">
            {/* <li className="current">新品</li>
            <li>众筹</li>
            <li>手机</li>
            <li>电视</li>
            <li>新品</li>
            <li>众筹</li>
            <li>手机</li>
            <li>电视</li> */}
            {this.state.list.map((item,index)=>{
              return <li key={index}>{item.name}</li>
            })}
          </ul>
        </div>
        <div className="rightWrapper" ref="wrapper">
          <div className="entry-content-right">
            <div className="topImg">
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88306f97bb4402773aed2a830e92c465.jpg?thumb=1&w=500&h=200" alt=""/>
            </div>
            <div className="rightContent">
              <div className="title">手机</div>
              <ul className="rightUl">
                {
                    this.state.list[0]?this.state.list[0].list.map((item,index)=>{
                  return (
                    <li key={index} onClick={() => this.gotoDetail(item)}>
                      <img src={item.entryImg} alt="" />
                      <p>{item.name}</p>
                    </li>
                  )
                 }):''

                  
                }
                {/* <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li> */}
              </ul>
            </div>
            {/* <div className="rightContent">
              <div className="title">手机</div>
              <ul className="rightUl">
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
                <li>
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&w=120&h=120" alt=""/>
                  <p>小米9</p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Entry;