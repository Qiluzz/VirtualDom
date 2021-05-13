import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement';
import updateTextNode from './updateTextNode';
import createDOMElement from './createDOMElement';

export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 判断 oldDOM是否存在

    if(!oldDOM){
        mountElement(virtualDOM, container)

    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function'){
        // 不同直接替换
        const newElement =  createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)

    } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
        if(virtualDOM.type === 'text'){
            //更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
        }else{
            //更新元素属性
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)

        }
        virtualDOM.children.forEach((child,i) =>{
            diff(child, oldDOM, oldDOM.childNodes[i])
        })
    }
}