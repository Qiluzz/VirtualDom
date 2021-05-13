import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction'

export default function mountComponent(virtualDOM, container, oldDOM) {
    let nextVirtualDOM = null
    //判断组件的类组件还是函数组件
    if(isFunctionComponent(virtualDOM)){
        // 函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM)

    }else{
        // 类组件
        nextVirtualDOM =  buildClassComponent(virtualDOM)
    }
    //判断函数组件返回是否还是函数组件
    if(isFunction(nextVirtualDOM)){
        mountComponent(nextVirtualDOM, container, oldDOM)
    }else{
        mountNativeElement(nextVirtualDOM, container, oldDOM)
    }
  
}

function buildFunctionComponent(virtualDOM){
    return virtualDOM.type(virtualDOM.props || {})
}

function buildClassComponent(virtualDOM) {

    const component = new virtualDOM.type( virtualDOM.props || {})
    const nextVirtualDOM =  component.render()
    nextVirtualDOM.component = component
    return nextVirtualDOM
}