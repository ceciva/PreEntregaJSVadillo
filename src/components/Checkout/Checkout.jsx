import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc,doc,getDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Checkout.css"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    

    const manejadorFormulario = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

         

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async(productoOrden)=> {
                const productoRef = doc(db, "libros",productoOrden.id);
                const productoDoc= await getDoc(productoRef);
                const stockActual= productoDoc.data().stock;
                await updateDoc(productoRef,{
                    stock:stockActual -productoOrden.cantidad,
                })
            })
        )
            .then(()=> {
                addDoc(collection(db,"ordenes"), orden)
                .then ((docRef)=> {
                    setOrdenId(docRef.id);
                    vaciarCarrito();

                })
                .catch((error)=>{
                    console.log("Error al crear la orden", error);
                    setError ("Error al crear la orden, por favor vuelva a intentarlo");
                });
            })    

            .catch((error)=>{
                console.log("No se puede actualizar el stock", error);
                setError("Error al actualizar el stock");

                })
            }

      

    return (
        <div>
                <h2>Checkout</h2>
                <Form className="formCarrito" onSubmit = {manejadorFormulario}>
                    {
                        carrito.map(producto => (
                            <div key={producto.item.id}>
                                <p>{producto.item.nombre} x {producto.cantidad} unidades</p>
                                <p>Precio por unidad: ${producto.item.precio}</p>
                                <img className='fotoElegidos' src={producto.item.img} alt="{item.nombre}"></img>
                                
                                <hr />
                            </div>
                            
                        ))
                    }
                    <p>Cantidad de libros en el carrito: {cantidadTotal}</p>
                    <h2>Total Compra: $ {total}</h2>
                    <hr />
                    <Form.Group className="form" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
    
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    
                        <Form.Label>Confirmar Email</Form.Label>
                        <Form.Control type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
    
                        {
                            error && <p>{error}</p>
                        }
                    </Form.Group>
    
                    <Button variant="outline-info text-black" type="submit">Finalizar compra</Button>
                </Form>
    
                {
                    ordenId && (
                        <strong> Gracias por tu compra! Tu nro de orden es {ordenId}</strong>
                    )
                }
            </div>
        )
        
}

export default Checkout