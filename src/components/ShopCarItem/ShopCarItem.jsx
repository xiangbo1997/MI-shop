
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { List, Stepper } from 'antd-mobile';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import './index.less';
import axios from 'axios';
import store from '../../redux/store';
import { addShop, reduceShop, ischeckedShop} from '../../redux/action-creators';

const alert = Modal.alert;
class ShopCarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
           shopNum:1,
           isChecked:true,
           changeView:true,
        };
    }
    componentDidMount(){
        // axios.get('http://localhost:5000/shops')
        // console.log(this.props)
    }
    //改变数量
    changeNum=(add)=>{
        const { item } = this.props
        if(add){
            const action = addShop(item)
            //更新界面
           this.setState({
               changeView:!this.state.changeView
           })
            if (item.num === 10){
                Toast.info('商品最大数量不能大于10', 0.5)
                return
            }
            store.dispatch(action)
            // this.number = store.getState().shops[this.props.index].num
            // console.log(this.number)
            // this.setState({
            //     shopNum:++this.state.shopNum
            // })
        }else{
            const action1 = reduceShop(item)
            this.setState({
                changeView: !this.state.changeView
            })
            if (item.num === 1) {
                Toast.info('商品最大数量不能小于1', 0.5)
                return
            }
            store.dispatch(action1)
          
           
        }
        this.props.updataAllprice()

        this.number = store.getState().shops[this.props.index].num
    }
    //改变是否选中当前商品
    changeIsChecked=()=>{
        this.item = this.props.item
        const { item } = this
        this.setState({
            isChecked: !this.state.isChecked
        })
        const action = ischeckedShop(item)
        store.dispatch(action)
        this.props.updataAllprice()
        
    }
    // componentDidUpdate(){
    //     this.item = this.props.item
    //     this.number = store.getState().shops[this.props.index].num

    // }
    render() {
        const alert = Modal.alert;
        this.item = this.props.item
        const {item ,index} = this.props
        const { isChecked} = store
        // if (this.number){
        //     this.number = store.getState().shops[this.props.index].num
        // }
       

        // let  item  = store.getState().shops[this.props.index]
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
                                    <img src={item.entryImg} alt="" />
                                </div>
                                <div className="content">
                                    <div className="desc">
                                        <span>{item.name} {item.version[0]} {item.color[0]}</span>
                                        <span className="price">售价:{item.price}元</span>
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
                                            <div className="number">{store.getState().shops[this.props.index].num}</div>
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
                                                            this.props.deleteShopItem(index)
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


