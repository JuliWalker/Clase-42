import ProductsServices from "../services/productsServices.js";
import UsersServices from "../services/usersServices.js";

export default class ProductsController{
    constructor() {
        this.servicesProducts = new ProductsServices()
        this.servicesUser = new UsersServices()
    }

    getProducts = async(req,res)=>{
        try {
            // const usuario = await this.servicesUser.getOne(req.session.passport.user)
            const allProducts = await this.servicesProducts.getAll()
            res.send(allProducts)
            // res.status(200).render("home", { nombre: usuario.nombre, products: allProducts });
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

    getProductById = async(req,res)=>{
        try{
            const producto = await this.servicesProducts.getOne(req.params.id);
            producto? res.status(200).json(producto) : res.status(404).json({message: 'Producto no encontrado. id: ' + req.params.id});
        }
        catch (err){
            res.status(500).json({message: err.message});
        }  
    };

    saveProduct = async(req,res)=>{
        try {
            const obj = req.body
            const createProduct = await this.servicesProducts.saveNew(obj)
            res.json(createProduct)
        } catch (err) {
            res.json({message: err.message});
        }
    };

    updateProduct = async(req,res)=>{
        try{
            const productoActualizado = await this.servicesProducts.update(req.params.id, req.body);
            res.json({
                message: 'Producto actualizado correctamente',
                id: productoActualizado._id
                });
        }catch (err){
            res.json({message: err.message});
        }
    };

    deleteProduct = async(req,res)=>{
        try{
            const productoBorrado = await this.servicesProducts.delete(req.params.id);
            res.json({
                message: 'Producto borrado correctamente',
                id: productoBorrado._id
                });
        }
        catch (err){
            res.status(500).json({message: err.message});
        }
    };

}