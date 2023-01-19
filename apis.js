// cotizacion del dolar api con fetch
const cotizacion = async () => {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }
    // recorrer array con for each y mostrar en html
    cotizacion().then(data => {
    data.forEach(element => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${element.casa.nombre}</h5>
    <p class="card-text">Compra: ${element.casa.compra}</p>
    <p class="card-text">Venta: ${element.casa.venta}</p>
    </div>
    </div>
    `;
    document.getElementById("cotizacion").appendChild(div);
    });
    });
    

    









