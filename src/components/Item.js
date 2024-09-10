import PropTypes from 'prop-types'
import React from 'react'
import '../components/item.css'
import '../components/transection.css'

function Item(props) {

  // destructuring
  const {title, amount} = props


  const status = amount<0 ? "expense" : "income"
  const symbol = amount < 0 ? "-": "+"
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



  return (
    <div >
      <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
    </div>
  )
}

Item.propTypes={
  title: PropTypes.string.isRequired, // เป็นการบอกว่า title ต้องรับค่าเป็น string แล้วต้องส่งค่ามาด้วย
  amount: PropTypes.number //รับค่าเป็น number จะส่งค่ามาหรือไม่ส่งก็ได้
}
export default Item
