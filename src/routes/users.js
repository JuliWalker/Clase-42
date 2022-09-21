import passport from "passport";
import { Router } from "express";
import isAuth from '../utils/middleware/isAuth.js'
import UsersController from "../controllers/usersControllers.js";

const router = Router();
const controllerUser = new UsersController()


/* Login */

router.get("/login", controllerUser.getLogin);
router.post("/login",passport.authenticate('login',{
    failureRedirect:'/api/users/errorLogin',
    successRedirect:'/api/productos'
})) 
router.get("/errorLogin", controllerUser.errorLogin);

/* Registro */

router.get("/registro", controllerUser.getRegistro);
router.post("/registro",passport.authenticate('registro',{
    failureRedirect:'/api/users/errorRegistro',
    successRedirect:'/api/users/mailRegistro'
}))
router.get("/errorRegistro", controllerUser.errorRegistro);
router.get('/mailRegistro', isAuth, controllerUser.mailRegistro);

/* Logout */

router.get("/logout", isAuth, controllerUser.logout);


export default router;