const listaProductos = [
    {
        precio: 20,
        title: "Helado",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 15,
        title: "Chocolate",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 150,
        title: "Pizza",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 75,
        title: "Yogurth",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 35,
        title: "Caramelos",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 100,
        title: "Vino",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 750,
        title: "Caja de dulces",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 40,
        title: "Pan integral",
        imgURL: "https://picsum.photos/200/300"
    },
    {
        precio: 200,
        title: "Pastel",
        imgURL: "https://picsum.photos/200/300"
    }
]


let cantProducts = document.getElementById("cantidadProducto")
let listProducts = document.getElementById("list-products")
let productsAdd = []

document.addEventListener("DOMContentLoaded",()=>{
    mostrarProductos()    
    mostrarCantidad()
})

function mostrarProductos(){
    let fragmentoHTML = '';
    listaProductos.map( producto => {
        fragmentoHTML += `
        <div class="card">
            <img src="${producto.imgURL}" alt="">
            <h3>${producto.title}</h3>
            <p price="${producto.precio}">S/${producto.precio}.00</p>
            <button>Añadir al carrito</button>
        </div>
        `
    })
    listProducts.innerHTML = fragmentoHTML
}

listProducts.addEventListener("click",(e)=>{
    if(e.target.tagName === 'BUTTON'){
        let productoObjeto = {
            producto : e.target.parentElement.children[1].innerText,
            precio : e.target.parentElement.children[2].attributes['price'].value
        }
        agregarCarrito(productoObjeto)
        mostrarCantidad()
    }
    e.stopPropagation()
})

function agregarCarrito(productoObjeto){
    productsAdd.push(productoObjeto)
    cantProducts.textContent = productsAdd.length
}
function mostrarCantidad(){
    if(cantProducts.textContent == 0){
        cantProducts.style.display = 'none'
    }else{
        cantProducts.style.display = 'flex'
    }
}


