import Item from "../components/Item.js"

function Transection(props) {
  const {items} = props 

  return (
    <div>
      <div className='item'>
        {items.map((e)=>{
          return <Item {...e} key={e.id}/>
        })}
      </div>
    </div>
  )
}
export default Transection
