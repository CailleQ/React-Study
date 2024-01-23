
function App() {

  const handleClick = (name) => {
    console.log("button 点击事件",name)
  }
  return (
    <div className="App">
     <button onClick={()=>handleClick('tom')}>Click me </button>

    </div>
  );
}

export default App;
