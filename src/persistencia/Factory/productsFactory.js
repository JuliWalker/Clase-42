import { MongoDBProducts } from '../daos/products/productsDao.js'
import dotenv from 'dotenv'
dotenv.config()

export default class ProductsFactory{
    static getDao(){
        return new MongoDBProducts()
    }
}

// no estoy usando los archivos de Factory porque me tira error de que no es un constructor la funcion Static GetDao