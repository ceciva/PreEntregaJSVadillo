const misProductos = [
    
    {id:"1", nombre: "Alma negra", precio: 6200, img: "../img/almaNegra1.webp", stock: 98, idCat: "1"},
    {id:"2", nombre: "Indias blancas", precio: 4200, img: "../img/indiasBlancas.webp", stock:50, idCat:"2"},
    {id:"3", nombre: "Indias blancas 2", precio: 4500, img: "../img/indiasBlancas2.webp", stock:45, idCat:"3"},
    // {id:"4", nombre: "Caballo de fuego Paris", precio:8100, img: "../img/caballoDeFuegoParis.webp", stock:100, idCat:"1"},
    {id:"5", nombre: "Caballo de fuego Gaza", precio: 6300, img: "../img/caballoDeFuegoGaza.webp", stock:34, idCat:"2"},
    {id:"6", nombre: "Caballo de fuego Congo", precio: 6300, img: "../img/cabaloDeFuegoCongo.webp", stock:65, idCat:"3"},
    {id:"7", nombre: "El cuarto arcano", precio: 5600, img: "../img/cuartoArcano.webp", stock: 46, idCat:"1"},
    {id:"8", nombre: "Bodas de odio", precio: 6200, img: "../img/bodasDeOdio.webp", stock:34, idCat:"2"},
    {id:"9", nombre: "El hechizo del agua", precio: 7100, img: "../img/elHechizoDelAgua.webp", stock:39, idCat:"3"},
    {id:"10", nombre: "Jasy", precio: 5600, img: "../img/jasy2.webp", stock:15, idCat:"1"},
    {id:"11", nombre: "La tierra sin mal", precio: 5600, img: "../img/laTierraSinMal.webp", stock:56, idCat:"2"},
    {id:"12", nombre: "Lo que dicen tus ojos", precio: 6100, img: "../img/loQueDicenTusOjos.webp", stock: 48, idCat:"3"},
]

export const getProductos =() => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto= misProductos.find(prod=> prod.id === id);
            resolve(producto)
        },100)
    })

})
export const getProductosPorCategoria = (idCategoria)=> {
    return new Promise (resolve => {
        setTimeout(() =>{
            const productosCategoria = misProductos.filter(prod => prod.idCat ===idCategoria);
            resolve(productosCategoria);

        }, 2000)

    })
}

