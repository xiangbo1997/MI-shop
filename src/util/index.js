

/**
 * 
 * @param {*} $this 传入this组件的this
 * @param {*} sign  显示隐藏的表示（true/false）
 * @param {*} $ref  给标签添的ref
 */
 const showOrHidden=($this,sign,$ref)=>{
   
    
    var $r = $this.refs[$ref]
   
  //如果true显示
  if(sign){

    $r.style="display:none"
    
    
  }else{
    $r.style="display:block"
   
  }





}




export default{
  showOrHidden
}

