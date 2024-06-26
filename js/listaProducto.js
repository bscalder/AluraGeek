import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-listado]");

export default function construyeCard(id, nombre, precio, imagen) {
    const tarjeta = document.createElement("li");
    tarjeta.innerHTML = `<div class="tarjeta">
                        <img src="${imagen}" alt="${nombre}" class="fototarjeta" />
                        <div class="tarjeta-info">
                        ${nombre}
                        <div class="tarjeta-info--valor">
                        $ ${precio}
                        <img src="./img/trascan.png" class="botebasura" id="borrar-${id}" />
                        </div>
                        </div>
                        </div>`;
    const basura = tarjeta.querySelector(`#borrar-${id}`);
    basura.addEventListener("click", () => {
        conexionAPI.borraProducto(id);
    });
    return tarjeta;

}

async function listaDeProductos() {
    const listaAPI = await conexionAPI.listaProductos();
    listaAPI.forEach(element => lista.appendChild(construyeCard(element.id, element.nombre, element.precio, element.imagen)));

}

listaDeProductos();