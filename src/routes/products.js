import {Router} from 'express'
import ProductsController from '../controllers/productsController.js'
import isAuth from '../utils/middleware/isAuth.js'

const router = Router()
const controllerProducts = new ProductsController()

router.get('/', controllerProducts.getProducts)
router.get('/:id', controllerProducts.getProductById)
router.post('/', controllerProducts.saveProduct)
router.put('/:id', controllerProducts.updateProduct)
router.delete('/:id', controllerProducts.deleteProduct)

export default router



/*  export default class ProductsRouter{
    constructor(){
        this.controllerProducts = new ProductsController()
    }

    init(){
        router.get('/', isAuth, this.controllerProducts.getProducts)
        router.get('/:id', isAuth, this.controllerProducts.getProductById)
        router.post('/', isAuth, this.controllerProducts.saveProduct)
        router.put('/:id', isAuth, this.controllerProducts.updateProduct)
        router.delete('/:id', isAuth, this.controllerProducts.deleteProduct)
    }

} */