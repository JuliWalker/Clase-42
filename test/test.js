import chai from "chai";
import ProductsServices from "../src/services/productsServices.js";

const servicesProducts = new ProductsServices();

const assert = chai.assert;
const expect = chai.expect;

const prueba = 5;

describe("testing products services functions", async () => {
  let products = await servicesProducts.getAll();
  console.log("aqui");
  let largo = products.length;

  it("prueba de productos cargados", () => {
    assert.lengthOf(products, largo);
  });
  it("prueba", () => {
    assert.equal(prueba, 5);
  });

  /*     describe("pruebas get products", () => {

        it("tipo de resultado", () => {
            assert.typeOf(products,"array")
        })
        it("propiedades", () => {
            assert.hasAllKeys(products[0],["id","nombre","codigo","thumbnail","precio","stock"])
        })
    })

    describe("pruebas POST products", () => {

    })
    describe("pruebas delete products", () => {
        
    }) */
});
