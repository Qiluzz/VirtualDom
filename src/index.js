
import TinyReact from "./TinyReact";

const root = document.getElementById('root')

let code = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJbLTEsMzE4NDk4Mzc2MjYzNzQ0LC0xLDExNCxcImRiXzZfa2V5X3NwcmluZ1wiLDEwMDE0MDAxLG51bGwsXCIxXCIsbnVsbF0iLCJleHAiOjE2MjA4NzYwNzQsImlhdCI6MTYyMDg3NTk1NH0.Q8kLRKRy_L9H0d4Pqi0fKcrO06DOPtMA3bRQg04pZFplZDJzC0lU0zgpGB6W8FwMQzd3V33rjSkyVx8_F1vN6Q'
let page = 'ttk-edf-app-dzgl-portal'
let dljgOrgId = '318498376263744'
let loginUserId = '318495088212032'

const openNewTag = () =>{
    let url = `http://172.16.30.66:8081/#/edfx-app-root/simplelogin?appkey=${10005902}&page=${page}&code=${code}&orgIds=%5B319393849696256%5D&loginUserId=${loginUserId}&dljgOrgId=${dljgOrgId}`
    console.log(url)
    
    // window.open(url)
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

const modifyDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h6 data-test="test123">(编码必杀技)</h6>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3>(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}

        <button onClick={() => alert("你好！！！！！")}>点击我</button>

    2, 3
    </div>
)

TinyReact.render(virtualDOM, root)

setTimeout(()=>{
    TinyReact.render(modifyDOM, root)
},2000)

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


{/* TinyReact.render(<Alert name="张三" age={20}/>, root) */}