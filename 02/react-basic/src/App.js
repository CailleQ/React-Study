import React, {useState} from 'react';
import  './index.css';

//1.定义组件
function Button(){
  //业务逻辑组件逻辑  事件处理函数
  return <button>Click me </button>
}

//也可以使用箭头函数
// const Button = () => {}


//useState实现一个计数器按钮

//
const style = { 
  color :'red',
  fontSize : '50px'
}


function App() {

  // //传递自定义参数
  // const handleClick = (name) => {
  //   console.log("button 点击事件",name)

  // 既要传递自定义参数，又要传递event对象
  const handleClick = (name,e) => {
    console.log("button 点击事件",name,e)

  }

  //1.调用useState函数  添加一个状态变量
  //count 就是状态变量 ， setCount 就是修改状态变量的函数
  const [count,setCount] = useState(0) 


  //2.点击事件回调
  const handleClickCount = () => {
    //作用1 ：用传入的值修改状态变量
    //    2.重新渲染组件
    setCount(count+1)
  }

  //3.修改复杂状态变量
  const handleClickObj = () =>{
    setObj({
      ...obj,
      age:obj.age+1
    }
    )
  }


  //修改复杂状态变量，或者说是对象
  const [obj,setObj] = useState({name:'tom',age:18})

  return (
    <div className="App">
     <button onClick={(e)=>handleClick('tom',e)}>Click me </button>
     
     {/* 2. 渲染react 组件 应用  */}
     {/* 自闭和 */}
     <Button />
     <Button></Button>
     
     {/* 3. 传递自定义参数 */}
     <button onClick={handleClickCount}>{count}</button>
      
     {/* 4. 修改复杂状态变量 */}
     <button onClick={handleClickObj}>修改复杂状态变量{'  '+obj.name+'有'+obj.age+'岁'}</button>

    {/* 5. 行内样式控制 */}
    <span style={style}>this is a span</span>

    {/* 6. 通过class类名控制 */}
    <span className="foo">this is class foo</span>

    </div>
    
  );
}

export default App;
