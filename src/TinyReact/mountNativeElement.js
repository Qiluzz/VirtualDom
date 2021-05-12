import createDOMElment from './createDOMElement'

export default function mountNativeElement(virtualDOM, container){
    let newElement = createDOMElment(virtualDOM);
    
    //将转换之后的DOM对象显示在页面中
    container.appendChild(newElement)
}