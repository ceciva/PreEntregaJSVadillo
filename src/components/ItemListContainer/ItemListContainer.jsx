import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../itemList/itemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos ] = useState([]);

  const {idCategoria} = useParams();

  
  useEffect(() => {
    const funcion = idCategoria? getProductosPorCategoria : getProductos;

    funcion(idCategoria)
      .then(res => setProductos(res))
  }, [idCategoria])
  
  return (
    <>
      <h2>{greeting}</h2>
      <ItemList productos = {productos}/>
    </>  



    
  )
}

export default ItemListContainer