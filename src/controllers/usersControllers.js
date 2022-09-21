import UsersServices from "../services/usersServices.js";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export default class UsersController{
    constructor() {
        this.servicesUser = new UsersServices()
    }

/* Login */

    getLogin = async(req,res)=>{
        try {
            res.status(200).render("login");
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

    errorLogin = async(req,res)=>{
        try {
            res.status(200).render("errorLogin");
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

/* Registro */

    getRegistro = async(req,res)=>{
        try {
            res.status(200).render("registro");
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

    errorRegistro = async(req,res)=>{
        try {
            res.status(200).render("errorRegistro");
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

/* Node Mailer */

    mailRegistro = async(req,res)=>{
        try {

            const usuario = await this.servicesUser.getOne(req.session.passport.user)
    
            let nombre = usuario.nombre
            let apellido = usuario.apellido
            let email = usuario.email
    
            let htmlTemplate = `
            <h1>Bienvenido ${nombre} ${apellido}</h1>
            <p>
            Su correo ${email} ha sido registrado con éxito.
            </p>
            `;
    
            const transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                  user: process.env.USER_ETHEREAL,
                  pass: process.env.PASS_ETHEREAL,
                },
              });
    
            await transporter.sendMail({
                from: 'Juli app',
                to: email,
                subject: 'Regitro de usuario en Juli app',
                html: htmlTemplate,
              });
    
              res.redirect("/api/productos");
    
        } catch (error) {
            console.log(error)
        }       
    };

/* LogOut */

    logout = async(req,res)=>{
        try {
            const nombre = req.session.nombre;
            req.session.destroy((err) => {
                if (!err) { 
                console.log("Session destroyed");
                } else {
                res.send({ status: "Error al borrar session" });
                }
            })
            res.render("logout", { nombre })
        } catch (error) {
            console.log(error)
            res.send(error)
        }    
    };

}