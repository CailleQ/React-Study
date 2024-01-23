
//项目的根组件
//app -> index.js -> public/index.html(root)
const count = 100;
function getName() {
  return 'tom';
}

const list = [{id : 1001, name:'vue'},
              {id : 1002, name:'react'},
              {id : 1003, name:'angular'}]

const isLogin = false;

const articleType = 0; //0 1 3
//定义核心函数(根据不同的articleType返回不同的JSX模板)
function getArticleTem() {
  if(articleType === 0) {
    return <div>无图文章</div>
  } else if(articleType === 1) {
    return <div>单图文章</div>
  }else if(articleType === 3) {
    return <div>三图文章</div>
  }
}

// const handleClick = () => {
//   console.log("点击事件产生了");
// }

//事件参数 e
// const handleClick = (e) => {
//   console.log("点击事件产生了",e);
// }

//传递自定义参数
const handleClick = (name) => {
  console.log("点击事件产生了",name);
}

/*  ↑ 定义的变量以及函数  */

/*  ↓ 嵌入react实现  */
function App() {
  return (
    <div className="App">
      this is app
      { /*使用引号传递字符串 */}
      {'this is message'}
      { /*使用花括号传递变量 */}
      {count}
      { /*函数调用 */}
      {getName()}
      { /*方法调用 */}
      {new Date().getTime()}
      {/*使用js对象 */}
        <div style={{color: 'red'}}>this is div</div>

      {/*渲染列表*/}
      <ul>
        {list.map(item => <li key={item.id}>{item.id+item.name}</li>)}  
      </ul>

      {/*逻辑与 &&*/}
      {isLogin && <span>已登录</span>}

      {/*三元运算*/}
      {isLogin? <span>已登录</span>: <span>loading...</span>}

      {/*复杂条件渲染, 调用函数渲染不同模板*/}
      {getArticleTem()}
      
      {/*按钮事件绑定*/}
      <button onClick={()=>handleClick('jack')}>click me </button>
       

    </div>
  );
}

export default App;
