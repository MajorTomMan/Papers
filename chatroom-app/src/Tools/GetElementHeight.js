
export default function getElementHeightByClass(name,index){
    let array=getElements(name);
    let Height=window.getComputedStyle(array.at(index),null).getPropertyValue("height");//获取高度属性
    console.log(Height);
    return Height;
}

function getElements(name){
  let array=[]
  let Elements=document.getElementsByClassName(name) //返回一个节点集合
  for(var i=0;i<Elements.length;i++){
    var Element=Elements[i]
    array.push(Element)
    console.log(Element)
  }
  return array;
}

export function setElementInlineHeightByClass(name,index){
  let array=getElements(name);
  window.getComputedStyle(array.at(index),null).setProperty("line-height",getElementHeightByClass(name),"") //设置垂直文字垂直居中
}