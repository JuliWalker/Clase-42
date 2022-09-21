import { Router } from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";
import isAuth from "../utils/middleware/isAuth.js";

const router = Router();

router.get("/", isAuth, (req, res) => {
    res.redirect("/api/productos");
});

// router.use('/productos', isAuth, productsRouter)
router.use('/productos', productsRouter)
router.use('/users',usersRouter)

export default router;