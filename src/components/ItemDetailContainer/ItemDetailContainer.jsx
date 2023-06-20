import {useState, useEffect} from 'react'
import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(()=>{
        getUnProducto(8)
            .then(res => setProducto(res))
    },[])
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer