import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList";
import {useParams} from "react-router-dom";
import{collection, getDocs, where, query} from "firebase/firestore";
import {db} from "../../services/config";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos ] = useState([]);

  const {idCategoria} = useParams();

  useEffect(()=> {
      const misProductos = idCategoria ? query(collection(db,"libros") , where("idCat", "==", idCategoria)): collection(db, "libros")
      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map( doc =>{
            const data = doc.data()
            return {id:doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
  }, [idCategoria])
    
  return (
    <>
      <h2>{greeting}</h2>
      <ItemList productos = {productos}/>
    </>  
 
  )
}

export default ItemListContainer