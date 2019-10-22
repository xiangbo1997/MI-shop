
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { List, Stepper } from 'antd-mobile';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import './index.less';
import axios from 'axios';
const alert = Modal.alert;
class ShopCarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
           shopNum:1,
           isChecked:false,
        };
    }
    componentDidMount(){
        // axios.get('http://localhost:5000/shops')
    }
    //改变数量
    changeNum=(add)=>{
        if(add){
            if (this.state.shopNum === 10){
                Toast.info('商品最大数量不能大于10', 0.8)
                return
            }
            this.setState({
                shopNum:++this.state.shopNum
            })
        }else{
            if (this.state.shopNum ===1){
                Toast.info('商品最小数量不能小于1',0.8)
                return 
            }
            this.setState({
                shopNum: --this.state.shopNum
            })
            

        }
    }
    //改变是否选中
    changeIsChecked=()=>{
        this.setState({
            isChecked: !this.state.isChecked

        })
    }
    
    render() {
        const alert = Modal.alert;
        return (
           <div>
                {/* 具体加入购物车的商品 */}
                < div className="join-shopcar-shops" >
                    <ul className="shops">
                        <li className="shop-item">
                            <div className="top">
                                <div onClick={this.changeIsChecked}>
                                    <div className={this.state.isChecked ? 'isChecked hidden ' : 'isChecked '} >
                                        {/* <img src="http://tool.58pic.com/tubiaobao//Public/app/00/00/01/552cc580b5cec_32.png" alt=""/> */}

                                        <img src="http://tool.58pic.com/tubiaobao//Public/app/00/00/01/552cc580b5cec_32.png" alt="" />
                                    </div>
                                    <div className={this.state.isChecked ? 'isChecked' : 'isChecked hidden'} >
                                        <img src="http://tool.58pic.com/tubiaobao//Public/app/00/00/01/552cc582248d4_32.png" alt="" />


                                        {/* <img src="http://tool.58pic.com/tubiaobao//Public/app/00/00/01/552cc582248d4_32.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="pic">
                                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571387136.02255722.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <div className="desc">
                                        <span>Redmi 8A 3GB+32GB 耀夜黑</span>
                                        <span className="price">售价：699元</span>
                                    </div>
                                    <div className="num">
                                        {/* 增加数量的组件 */}
                                        {/* 
                                        <div className="reduce" onClick={() =>  this.changeNum(0)}>-</div>
                                        <div className="number">{this.state.shopNum}</div>
                                        <div className="add" onClick={() => this.changeNum(1)}>+</div> 
                                        */}
                                        {/* 增加，减少 */}
                                        <WingBlank className="numItem">
                                            <WhiteSpace />
                                            <Button className="reduce" onClick={() => this.changeNum(0)}>-</Button>
                                            <div className="number">{this.state.shopNum}</div>
                                            <Button className="add" onClick={() => this.changeNum(1)}>+</Button> 
                                        </WingBlank>
                                    

                                        {/* <div className="del" onClick={this.delete}>
                                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=240090699,2117527618&fm=26&gp=0.jpg" alt="" />
                                        </div> */}
                                        <WingBlank size="lg" >
                                            <WhiteSpace size="lg" />
                                            <Button
                                                className="del"
                                                onClick={() =>
                                                    alert('删除商品', '客观，你确定要删除此商品吗？', [
                                                        { text: '取消', onPress: () => {} },
                                                        { text: '确定', onPress: () => {
                                                            this.props.deleteShopItem(0)
                                                        } },
                                                    ])
                                                }
                                            >
                                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=240090699,2117527618&fm=26&gp=0.jpg" alt="" />

                                                
    </Button>
                                        </WingBlank>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="other">
                                    <img src="//s1.mi.com/m/images/m/insurance.png" alt=""/>
                                    <span>赠送意外保护1年</span>
                                </div>
                                <div className="other">
                                    <img src="//s1.mi.com/m/images/m/insurance.png" alt="" />
                                    <span>赠送延长保修1年</span>    
                                </div>
                            </div>
                        </li>
                    </ul>
                </div >
           </div>
        )
    }
}

export default ShopCarItem;



// <Button
//     onClick={() =>
//         alert('Delete', 'Are you sure???', [
//             { text: 'Cancel', onPress: () => console.log('cancel') },
//             {
//                 text: 'Ok',
//                 onPress: () =>
//                     new Promise((resolve) => {
//                         Toast.info('onPress Promise', 1);
//                         setTimeout(resolve, 1000);
//                     }),
//             },
//         ])
//     }
// >
//     promise
//     </Button>


