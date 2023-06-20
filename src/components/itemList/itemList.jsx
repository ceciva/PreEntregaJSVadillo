import React from 'react'
import Item from '../Item/Item'
const itemList = ({productos}) => {
  return (
    <div>
        {productos.map(prod => <Item key = {prod.id} {...prod} />)}
    </div>
  )
}

export default itemList