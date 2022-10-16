import {Router} from 'express'
import ProductsController from '../controllers/productsController.js'

const router = Router()
const controllerProducts = new ProductsController()

router.get('/', controllerProducts.getProducts)
router.get('/:id', controllerProducts.getProductById)
router.post('/', controllerProducts.saveProduct)
router.put('/:id', controllerProducts.updateProduct)
router.delete('/:id', controllerProducts.deleteProduct)

export default router
