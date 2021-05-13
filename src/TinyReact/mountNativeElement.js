import createDOMElment from './createDOMElement'
import unmountNode from './unmountNode';

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElment(virtualDOM);
    //判断旧的DOM对象是否存在 如果存在 删除
    if(oldDOM){
        unmountNode(oldDOM)
    }
    
    //将转换之后的DOM对象显示在页面中
    container.appendChild(newElement)
    // 获取类组件实例对象
    let  component = virtualDOM.component
    // 如果类组件实例对象存在
    if(component){
        // 将DOM对象储存在类组件实例对象中
        component.setDOM(newElement)
    }
}