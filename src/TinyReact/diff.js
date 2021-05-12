import mountElement from './mountElement'

export default function diff(vitualDOM, container, oldDOM) {
    // 判断 oldDOM是否存在
    if(!oldDOM){
        mountElement(vitualDOM, container)
    }
}