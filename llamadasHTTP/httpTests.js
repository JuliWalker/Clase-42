/* import http from "http"




http.get('http://localhost:8080/api/productos', (res) => {
    let productos = ""
    res.on('data', (info) => {
        productos = productos + info
    })
    res.on('end', () => {
        console.log(productos)
    })
})




const productsPOST = JSON.stringify({
    "nombre":"auriculares Noga v2","descripcion":"auriculares in-ear con cable para uso de oficina v2","codigo":"7A33595F2","thumbnail":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/953/products/ng-1600-ng-full1-bb5789c3161060491716408852964073-640-01-acb47fbdfc4b8f8eab16494472023268-640-0.jpg","precio":950,"stock":53
})

const opciones = {
    hostname:'localhost',
    port:8080,
    path:'/api/productos',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length':productsPOST.length

    }
}

http.request(opciones,res => {
    let productos = ""
    res.on('data', (info) => {
        productos = productos + info
    })
    res.on('end', () => {
        console.log(productos)
    })
}).write(productsPOST) */