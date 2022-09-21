import express  from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import 'dotenv/config'
import passport from "passport";
import './utils/passport/local.js'
import morgan from "morgan";
import indexRouter from './routes/indexRoutes.js';
import os from "os";
import cluster from "cluster";

const app = express();
const PORT = process.env.PORT || 8080
const MODO = process.env.MODO || "fork";
const nroCPUs = os.cpus().length;

/** corremos el modo cluster si estamos en ese modo: */

if (cluster.isPrimary && MODO === "cluster") {
    console.log(
      `🧮 Primary PID ${process.pid} is running. On port ${PORT}. 🧑‍💻 MODO: ${MODO}.`
    );
    for (let i = 0; i < nroCPUs; i++) {
      cluster.fork(); // crea un proceso por cada cpu disponible
    }
    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {

/** Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.DB_MONGO,
            ttl: 60 * 10 // 10 minutes
            })
    }
));
app.use(passport.initialize())
app.use(passport.session())


/** Views */
app.set('views', 'src/views');
app.set('view engine', 'ejs');


/** Routes */
app.use('/api', indexRouter);
app.get("/", (req, res) => {
  res.redirect("/api");
});


/** Server */
try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}

}


// Reemplazar algunos loggers con los loggers vistos en clase
// agregar la parte de soket io
// Agregar al formulario de carga de usuarios lo de subir imagenes
// Agregar a las views las funcionalidades para cargar y ver el carrito.

// agregar la parte del cart con la logica que subio Laura para leer desde ID todo el producto. 