import {useState} from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = () => {
    const [contador, setContador]= useState(1);
    
    const incrementar=()=>{
        if (contador < 10){
            setContador(contador + 1)
        }
    }

    const decrementar=()=>{
        if (contador > 1){
            setContador(contador - 1)
        }
    }

  return (
    <>
        <div className = "d-sm-inline-flex">
            <Button variant= "outline-info" onClick = {decrementar}> - </Button>
            <p> { contador} </p>
            <Button variant= "outline-info" onClick = {incrementar}> + </Button>
        </div>    
    </>
  )
}

export default ItemCount