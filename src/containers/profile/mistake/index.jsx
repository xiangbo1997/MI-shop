import React, { Component } from 'react'
import'./less/index.less'
class Mistake extends Component {
  componentDidMount(){
    console.log(this)
  }
  render(){
    return <div className="mistake-warp">
      <h1>{this.props.location.state}系统维护中，暂未开放！！！！！</h1>
      </div>
  }
}
export default Mistake