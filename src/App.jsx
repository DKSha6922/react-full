// import Student from './components/Student';
// // import LearnComponent from './components/Learn/LearnComponent';
// // import Header from './components/Header';
// import ArraySample from './components/ArraySample';
// import OneOfSample from './components/OneOfSample';
// import MultiTypeComponent from './components/MultiTypeComponent';
// import FunctionSample from './components/FunctionSample';
// import UserCart from './components/UserCart';
import QrCode from './components/QrCode';
// import './css/style.css';
// import ChildComponents from './components/ChildComponents';
import './css/QrCode.css';
function App() {
  // const items =[
  //   {id:1, name:"Item 1"},
  //   {id:2, name:"Item 2"},
  //   {id:3, name:"Item 3"},
  // ]
  // const handleClick =()=>{
  //   alert("Button clicked")
  // }
  return (
    <>
    <QrCode/>
   {/* <UserCart/> */}
      {/* Uncomment to render LearnComponent and Header */}
      {/* <p>hello</p> */}
      {/* <LearnComponent />
      <Header /> */}

      {/* Student Components with different props */}
      {/* <Student name="Shafi" age={24} isMarried={false} />
      <Student name="Lane" age={21} isMarried={true} />
      <Student name="Mank" age={32} isMarried={true} />
      <Student /> Will use defaultProps */}

      {/* ChildComponents with children */}
      {/* <ChildComponents>
        <p>Sample 1</p>
        <p>Sample 2</p>
      </ChildComponents> */}
       {/* <ArraySample items={items}/> */}
       {/* <OneOfSample color="green"/> */}
       {/* <MultiTypeComponent value="hello"/>
       <MultiTypeComponent value={43}/>
       <MultiTypeComponent value={true}/> */}
       {/* <div>
        <h2>Parent Component</h2>
        <FunctionSample handleClick={handleClick}/>
       </div> */}
       
    </>
  );
}

export default App;
