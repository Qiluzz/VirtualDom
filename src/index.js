
import TinyReact from "./TinyReact";

const root = document.getElementById('root')

let code = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJbMzIzNDQ3MzA2OTE1ODQwLDMyMzQ0NzMwNzk3MjYwOCwtMSwxMTQsXCJkYl8zX2tleV9zcHJpbmdcIiwxMDAxNDAwMSxudWxsLFwiMVwiLG51bGxdIiwiZXhwIjoxNjIwODEwMzIxLCJpYXQiOjE2MjA4MTAyMDF9.Cck77YGPK02HtyJ6EzwOU4YE5c7InyrXQzY21e4irJhtUcVLdiJl4jSABalDnUlNYuat5kcrcX0bHHK6khmnSQ'
let page = 'ttk-es-app-personaltaxcode'
let dljgOrgId = '7063224437462016'
let loginUserId = '7063218220454912'

const openNewTag = () =>{
    let url = `http://172.16.30.66:8081/#/edfx-app-root/simplelogin?appkey=10014001&page=${page}&code=${code}&orgIds=%5B307270718972800%5D&loginUserId=${loginUserId}&dljgOrgId=${dljgOrgId}`
    window.open(url)
}
const virtualDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h2 data-test="test">(编码必杀技)</h2>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3>(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}
        <span>这是一段内容</span>
        <button onClick={() => openNewTag()}>点击我</button>
        <h3>这个将会被删除</h3>
    2, 3
    </div>
)

// TinyReact.render(virtualDOM, root)
function Demo(){
    return <div>hello</div>
}
function Heart(props){
    return (
    <div> 
        {props.title}
        &hearts; 
        < Demo / > 
    </div>)
}

{/* TinyReact.render(<Heart title="Hello React"/>, root) */}

class Alert extends TinyReact.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div> 
            {this.props.name}
            {this.props.age}
            </div>
        )
    }
}


TinyReact.render(<Alert name="张三" age={20}/>, root)