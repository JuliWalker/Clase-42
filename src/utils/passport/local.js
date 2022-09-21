import passport from "passport";
import { Strategy } from "passport-local";
import UsersServices from "../../services/usersServices.js";
import { encryptPassword, comparePassword } from '../bcryptConfig/bcrypt.js'

const servicesUser = new UsersServices()

const LocalStrategy = Strategy

passport.use('registro', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true  // esto ultimo es para habilitar a Passport a tomar el resto de la info que viene en el objeto "req" ademas del pass y el user
},async(req,email,password,done)=>{
    const usuarioDB = await servicesUser.getByMail(email)
    if (usuarioDB) {
        return done(null,false)
    }
    // encripto la pass antes de guardarla en mongo
    req.body.password = await encryptPassword(password);
    // guardo el usuario y lo guardo en una constante para devolverlo con el done
    const usuarioMongo = await servicesUser.saveNew(req.body)
    return done(null,usuarioMongo)
}))

passport.use('login', new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},async(req,email,password,done)=>{
    const usuarioDB = await servicesUser.getByMail(email)
    if (!usuarioDB) {
        return done(null,false, { message: "El usuario no existe" })
    }
    // compara el password que ingreso el usuario con el password hasheado y guardado de la DB
    const isTruePassword = await comparePassword(password, usuarioDB.password);
    if (!isTruePassword) {
      return done(null, false, { message: "El password es incorrecto" });
    }
    done(null,usuarioDB)
}))

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser(async(id,done)=>{
    const usuario = await servicesUser.getOne(id)
    done(null,usuario)
})