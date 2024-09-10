import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import HelloComponent from './components/HelloComponent'

// ReactDOM.render(< App/>,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);





// const data = (
//   <h1>Hello react</h1>
// )
// ReactDOM.render(data,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));


// การสร้าง component
// function HelloComponent(){
//   return <h1>Hello React</h1>
// }

// ReactDOM.render(< HelloComponent/>,document.getElementById('root'));

// class HelloComponent extends React.Component {
//   render() {
//     return <h1>Hello React class Component</h1>
//   }
// }
// ReactDOM.render(< HelloComponent/>,document.getElementById('root'));




reportWebVitals();
