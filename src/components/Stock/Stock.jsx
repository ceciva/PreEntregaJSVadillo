import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const Stock = ({id, nombre, precio,img, stock}) => {
  return (
    <div>
        <p>Unidades disponibles: {stock}</p>
    </div>
  )
}

export default Stock