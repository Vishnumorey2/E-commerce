import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import '../Popular/Popular.css'

const Popular = () => {
  return (
   <div className="popular">
    <h1>POPULAR IN MEN</h1>
    <hr/>
    <div className="popular-item">
        {data_product.map((item,i)=> {
            return <Item key={i}  Id={item.id} name={item.name} image={item.images} new_price={item.new_price}  old_price={item.old_price}/>
        })}
    </div>
   </div>
  )
}

export default Popular