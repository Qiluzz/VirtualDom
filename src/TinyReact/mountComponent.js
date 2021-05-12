import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction'

export default function mountComponent(virtualDOM, container) {
    let nextVirtualDOM = null
    //判断组件的类组件还是函数组件
    if(isFunctionComponent(virtualDOM)){
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
        console.log(nextVirtualDOM)
    }
    //判断函数组件返回是否还是函数组件
    if(isFunction(nextVirtualDOM)){
        mountComponent(nextVirtualDOM,container)
    }else{
        mountNativeElement(nextVirtualDOM, container)
    }
  
}

function buildFunctionComponent(virtualDOM){
    return virtualDOM.type()
}