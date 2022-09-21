import chai from "chai";
import ProductsServices from "../src/services/productsServices.js";

const servicesProducts = new ProductsServices()

const assert = chai.assert
const expect = chai.expect

describe("testing products services functions", () => {

    let products = ""

    const getProducts = async() => {
        products = await servicesProducts.getAll()
    
        describe("pruebas get products", () => {
            it("prueba de productos cargados"), () => {
                assert.lengthOf(products,5)
            }
            it("tipo de resultado"), () => {
                assert.typeOf(products,"array")
            }
            it("propiedades"), () => {
                assert.hasAllKeys(products[0],["id","nombre","codigo","thumbnail","precio","stock"])
            }
        })
    
    }

    getProducts()


/*     describe("pruebas post products", () => {
        
    })
    describe("pruebas delete products", () => {
        
    }) */
})