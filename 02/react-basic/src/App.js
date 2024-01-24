import React, {useState} from 'react';


//1.定义组件
function Button(){
  //业务逻辑组件逻辑
  return <button>Click me </button>
}

//也可以使用箭头函数
// const Button = () => {}


//useState实现一个计数器按钮




function App() {

  // //传递自定义参数
  // const handleClick = (name) => {
  //   console.log("button 点击事件",name)

  // 既要传递自定义参数，又要传递event对象
  const handleClick = (name,e) => {
    console.log("button 点击事件",name,e)

  }

  //调用useState函数  添加一个状态变量
  useState() 




  return (
    <div className="App">
     <button onClick={(e)=>handleClick('tom',e)}>Click me </button>
     
     {/* 2. 渲染react 组件 应用  */}
     {/* 自闭和 */}
     <Button />
     <Button></Button>
     <button> 0 </button>

    </div>
  );
}

export default App;
