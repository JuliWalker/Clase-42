import axios from "axios"


/* GET */

const getProducts = async() => {
    const products = await axios.get('http://localhost:8080/api/productos')
    console.log(products.data)
}

getProducts()


/* POST */

const productsPOST = JSON.stringify({
    "nombre":"auriculares Noga v3","descripcion":"auriculares in-ear con cable para uso de oficina v3","codigo":"7A33595F3","thumbnail":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/953/products/ng-1600-ng-full1-bb5789c3161060491716408852964073-640-01-acb47fbdfc4b8f8eab16494472023268-640-0.jpg","precio":950,"stock":53
})

const postProduct = async(product) => {
    const productoAgregado = await axios.post('http://localhost:8080/api/productos',product)
    console.log(productoAgregado.data)
}

postProduct(productsPOST)
