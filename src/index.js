//项目入口 从这里开始运行
//react 必要的两个核心包

import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目的根组件
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

