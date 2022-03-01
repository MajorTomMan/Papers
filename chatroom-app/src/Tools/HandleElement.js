
export default function getElementValue_ByClass(name,index){
    let Element=getElements_class(name)[index];
    console.log(Element.textContent);
    return Element.textContent;
}


export function setElementValue_ByClass(name,value,index){
  let Element=getElements_class(name)[index];
  Element.textContent=value;
  console.log(Element.textContent)
}

function getElements_class(name){
  let array=[]
  let Elements=document.getElementsByClassName(name) //返回一个元素节点集合
  for(var i=0;i<Elements.length;i++){
    var Element=Elements[i]
    array.push(Element)
    console.log(Element)
  }
  return array;
}

export function getElementValue_ById(name){
  let Element=getElement_id(name);
  console.log(Element.textContent);
  return Element.textContent;
}

export function setElementValue_ById(name,value){
  let Element=getElement_id(name);
  Element.textContent=value
  console.log(Element.textContent);
}

function getElement_id(name){
  let Element=document.getElementById(name) //返回查找到的第一个元素引用
  return Element;
}