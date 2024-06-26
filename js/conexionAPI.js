async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    });
    const conexionConv = await conexion.json();
    return conexionConv;
}

async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    const conexionConv = await conexion.json();
    return conexionConv;
}

async function borraProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    })
    const conexionConv = await conexion.json();
    return conexionConv;
}

export const conexionAPI = {
    crearProducto, listaProductos, borraProducto
}