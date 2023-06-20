const misProductos = [
    
    {id:1, nombre: "Alma negra", precio: 6200, img: "./img/almaNegra1.webp"},
    {id:2, nombre: "Indias blancas", precio: 2000, img: "./img/indiasBlancas.webp"},
    {id:3, nombre: "Indias blancas 2", precio: 2500, img: "./img/indiasBlancas2.webp"},
    {id:4, nombre: "Caballo de fuego Paris", precio: 4950, img: "./img/caballoDeFuegoParis.webp"},
    {id:5, nombre: "Caballo de fuego Gaza", precio: 4950, img: "./img/caballoDeFuegoGaza.webp"},
    {id:6, nombre: "Caballo de fuego Congo", precio: 4950, img: "./img/cabaloDeFuegoCongo.webp"},
    {id:7, nombre: "El cuarto arcano", precio: 4950, img: "./img/cuartoArcano.webp"},
    {id:8, nombre: "Bodas de odio", precio: 4950, img: "./img/bodasDeOdio.webp"},
    {id:9, nombre: "El hechizo del agua", precio: 4950, img: "./img/elHechizoDelAgua.webp"},
    {id:10, nombre: "Jasy", precio: 4950, img: "./img/jasy2.webp"},
    {id:11, nombre: "La tierra sin mal", precio: 4950, img: "./img/laTierraSinMal.webp"},
    {id:12, nombre: "Lo que dicen tus ojos", precio: 4950, img: "./img/loQueDicenTusOjos.webp"},
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
        },2000)
    })

})

