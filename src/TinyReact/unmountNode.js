export default function unmountNode(node) {

    const virtualDOM = node._virtualDOM
    //1.文本节点可以直接删除
    if(virtualDOM.type === 'text'){
        node.remove()
        return
    }
    //2. 看一下节点是否由组件生成的
    let component = virtualDOM.component
    //如果component 存在 就说明节点是有组件生成
    if(component){
        component.componentWillUnmount()
    }
    //3. 节点是否由ref属性
    if(virtualDOM.props && virtualDOM.props.ref){
        virtualDOM.props.ref(null)
    }
    //4. 节点的属性是否有事件属性
    Object.keys(virtualDOM.props).forEach(propName =>{
        if(propName.slice(0,2) === 'on'){
            const eventName = propName.toLowerCase().slice(0,2)
            const eventHandle = virtualDOM.props[propName]
            node.removeEventListener(eventName, eventHandle)
        }
    })
    //5.递归删除子节点
    if(node.childNodes.length > 0 ){
        for(let i = 0; i<node.childNodes.length; i++){
            unmountNode(node.childNodes[i])
            i--
        }
    }
    node.remove()
}