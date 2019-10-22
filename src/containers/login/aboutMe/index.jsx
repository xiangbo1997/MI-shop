import React, { Component } from 'react'
import './less/index.less'

import method from '../../../util'
const {showOrHidden} = method



class AboutUs extends Component {
  //创建一个ref（存储列表）
  // imgList = React.createRef();
  //创建一个ref （存储遮罩层）
  // imgMark = React.createRef();
  state = {
    images: [
      {
        id: 1,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571576955226&di=18538dc33624727b6947d603e2e86f7a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171228%2F72ea3ce2a9c44fb298efcd76b8c080be.jpeg"
      },
      {
        id: 2,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571576955227&di=6198fb3857678bf9207e7451ae27084e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F509%2Fw261h248%2F20181123%2FymlE-hmhswin8881584.jpg"
      },
      {
        id: 3,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583617668&di=56dbde629d3fd0ea0016d54528779424&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft015f7f1b49a4bb2778.jpg"
      },
      {
        id: 4,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583617665&di=d2f2cd70dafdd0ec6c46b660d5e6fff8&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F48540923dd54564ea50db06cb8de9c82d1584f7e.jpg"
      },
      {
        id: 5,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583617665&di=5914cc697744582a0367abcaf3d6754d&imgtype=0&src=http%3A%2F%2Fwww.biaoqingdi.net%2Fbqimgs%2F20161209%2F201612091505117021.jpg"
      },
      {
        id: 6,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583617664&di=f6bff45e1ac6279b3574ab14e634f364&imgtype=0&src=http%3A%2F%2Fp0.ssl.cdn.btime.com%2Ft0121496ecb7c5aef23.jpg"
      },
      {
        id: 7,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583617663&di=cf7bfc0420cc874eadb91672ae3b168e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F138ff10174a810734165e55a31c1451b2191bcc876e0-DP4sxz_fw658"
      },
      {
        id: 8,
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571583618394&di=19e4a1128b9565c0a8cacf203ced4101&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D828309451%2C2643080961%26fm%3D214%26gp%3D0.jpg"
      },
    ],
    index:0,
    isShow:true
    
  }
  componentDidUpdate(){
    const {isShow} = this.state
   showOrHidden(this,!isShow,'imgList') 
   showOrHidden(this,isShow,'imgMark') 
  

    // if(!this.state.isShow){
      
    //   this.imgList.current.style="display:none"
    //   this.imgMark.current.style="display:block"
    // }else{
    //   this.imgList.current.style="display:block"
    //   this.imgMark.current.style="display:none"
    // }
  }
  //查看大图
  seeBigImg=(index)=>{
    return ()=>{
      // console.log(this.imgList.current)
     
        this.setState({
        isShow:false,
        index
        })
    }

      
  }
//显示列表
markImg=()=>{
  this.setState({
    isShow:true
    })

}


  render() {
    const {showOrHidden} = method
    return (
        <div className='whole'>
  <div className='about-warp' ref='imgList'  >
        <div className='about-header'>
          <h1>图片展示墙</h1>
         
        </div>
        <div className='about-container'>
          <ul className="album-list">
            {this.state.images.map((item, index) => { 
              return  <li onClick={this.seeBigImg(index)} key={index}><img src={item.url} /></li> 
            })
               
               }

          </ul>





        </div>
        <div className='about-footer'>
          <div>商务合作</div>
          <div>联系我们</div>
          <div>联系电话：13706387374</div>

        </div>
      </div>
      <div className='mask' ref='imgMark' onClick={this.markImg} >
    
      {this.state.images.map((item, index) => { 
            if(index===this.state.index){
              return  <div key={index} className='bigImg'><img src={item.url} /></div> 
            }
              
            })
               
               }
      </div>
        </div>
    
    )
  }
}
export default AboutUs