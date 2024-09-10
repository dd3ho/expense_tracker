import { useEffect, useReducer, useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import FormComponent from './components/FormComponent'
import ReportComponent from './components/ReportComponent.js'
import Transection from './components/Transection'
import DataContext from './data/DataContext.js'


const Title =()=><h1 className='description'>แอพบัญชีรายรับ-รายจ่าย</h1>


function App() {

  // const initState = [
  //   {id: 1, title: "rent-house", amount: -2000},
  //   {id: 2, title: "income", amount: 35000},
  //   {id: 3, title: "travel", amount: -1000},
  //   {id: 4, title: "Sales income", amount: 5000},
  // ]
  // useState
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  //useEffect
  useEffect(()=>{
    // คำนวณรายรับ-รายจ่าย
    const amounts = items.map((e=>e.amount))
    console.log(amounts)

    // รายได้
    const income = amounts.filter(e=>e>0).reduce((value, e)=> e+value, 0).toFixed(2)
    console.log("รายได้: ",income)

    // รายจ่าย
    const expense = (amounts.filter(e=>e<0).reduce((value, e)=> e+value, 0))*-1
    console.log("รายจ่าย: ",expense)
    
    //set ค่า state
    setReportIncome(income)
    setReportExpense(expense.toFixed(2))

    // ยอดรวม
    const total = amounts.reduce((value, e)=> e+value, 0)
    console.log("total: ", total)

  }, [items, reportIncome, reportExpense ])

  // function
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem] //ข้อมูลใหม่ต่อท้ายด้วยข้อมูลเก่า
    })
  }

  // reducer state
  // const [count, setCount] =useState(0)
  const reducer = (state, action) => {
    // state ที่เราต้องการให้เกิด action
    // action คือรูปแบบการกระทำต่างๆมี่เราจะทำกับ state
    switch(action.type){
      case "ADD" :
        return state+action.payload
      case "SUB" :
        return state-action.payload
      case "CLEAR":
        return 0
    }
  }

  // การเรียกใช้ reducer
  // const [result, dispatch] = useReducer(reducer,count)

  // reducer showReport
  const [showReport, setShowReport] = useState(true)
  
  const showReportReducer = (state, action) => {
    // state ที่เราต้องการให้เกิด action
    // action คือรูปแบบการกระทำต่างๆ ที่เราจะทำกับ state
    switch(action.type){
      case "SHOW" :
        return setShowReport(true);
      case "HIDE" :
        return setShowReport(false);
      default:
        // จัดการกรณีที่ไม่มี case ตรงกับ action.type
        return state;
    }
  }
  
  // const [showReportResult, showReportDispatch] = useReducer(showReportReducer,count)

  return (
    <>
    <div className='container'>
    <DataContext.Provider value={{income: reportIncome, expense: reportExpense}}>
        <Title/>
        <Router>
          <ul className='horizontal-menu'>
            <li>
              {/* <a href="#">ข้อมูลบัญชี</a> */}
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              {/* <a href="#">บันทึกข้อมูล</a> */}
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
             {/* อ้างอิง path ที่ผุ้ใช้เลิอกแล้วไปยังส่วนนั้น */}
            <Route path="/" element={showReport && <ReportComponent/>} />
            <Route path="/insert" element={
            <>
              <FormComponent onAddItem={onAddNewItem} />
              <Transection items={items}/>
            </>
            } 
            />
        </Routes>
        </Router>
        <div>
        </div>
    </DataContext.Provider>
    </div>
    {/* <div align="center">
      <h1>{result}</h1>
      <button onClick={()=>dispatch({type: "ADD", payload: 25})}>เพิ่ม</button>
      <button onClick={()=>dispatch({type: "SUB", payload: 10})}>ลด</button>
      <button onClick={()=>dispatch({type: "CLEAR"})}>ล้าง</button> 
    </div> */}

    {/*reducer  */}
    {/* <div align="center">
      <button onClick={()=>showReportDispatch({type: "SHOW"})}>แสดง</button>
      <button onClick={()=>showReportDispatch({type: "HIDE"})}>ซ่อน</button>
    </div> */}

    </>
  );
}

export default App;
