import { Router } from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";
import carritosRouter from "./carritosRoutes.js";
import isAuth from "../utils/middleware/isAuth.js";

const router = Router();

router.get("/", isAuth, (req, res) => {
    res.redirect("/api/productos");
});

router.use('/productos', isAuth, productsRouter)
router.use('/carritos', carritosRouter)
router.use('/users',usersRouter)

export default router;