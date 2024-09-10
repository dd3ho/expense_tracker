import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../components/FormComponent.css'

const FormComponent = (props) =>{
  console.log("render form component")
  // useState
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [formValidate, setFormValidate] = useState(false)

  // event
  const inputTitle = (event) => {
    setTitle(event.target.value);
  }

  const inputAmount = (event) => {
    setAmount(event.target.value);
  }

  const saveItem = (event) => {
    event.preventDefault(); //กันการ reload หน้า
    console.log("บันทึกข้อมูลเรียบร้อย")

    const itemData = {
      id: uuidv4(),
      title:title,
      amount:Number(amount)
    }
    // ทำการ props ข้อมูลขึ้นไปหา parent component (app component)
    props.onAddItem(itemData);
    setTitle('')
    setAmount(0)
  }

  // useEffect
useEffect(()=>{
  // console.log("call useEffect")
  const checkData = title.trim().length>0 && amount !== 0 //เอาtitle มาตัด space ซ่าย-ขวาเเล้วความยาวมากกว่า 0 ไหม
  // if(checkData){
  //   setFormValidate(true);
  // }
  setFormValidate(checkData);


}, [title,amount])

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder='ระบุชื่อรายการของคุณ' onChange={inputTitle} value={title}/>
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input type="number" placeholder='(+รายรับ,-รายจ่าย)' onChange={inputAmount} value={amount}/>
        </div>
        <div>
          <button type='submit' className='btn' disabled={!formValidate}>เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
