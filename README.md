# Proyecto Back-End

## Es un proyecto de **Back-End** de una aplicación de **e-commerce** 


## Variables de Entorno
 - **PORT** - Puerto que utilizara nuestro servidor
 - **JWT_PRIVATE_KEY** - Clave de la firma de nuestro Token
 - **USER_ETHEREAL** - Usuario de nuestro servicio mail
 - **PASS_ETHEREAL** - Password de nuestro servicio mail
 - **MODO** - Elegir si corremos el servidor en modo FORK o CLUSTER
 - **DB_MONGO** - Dirección que nos pasa MONGO DB para conectarnos desde NODE
 
### Para realizar el proyecto se utilizaron las siguientes técnologias

 1. Node Js
 2. Mongo DB
 3. Mongoose
 4. Dotenv
 5. Ejs
 6. Express
 7. Bcrypt
 8. Jsonwebtoken
 9. Nodemon
 10. Nodemailer
 11. WebSockets

### Instalar Dependencias

    npm install

### Levantar el servidor
**Modo Producción**

    npm start

 **Modo Desarrollo (tener instalado Nodemon)**
    
    npm run mon

## Endpoints


## Rutas de usuarios:

Las rutas de los usuarios estan todas dispuestas en EJS, por lo tanto el registro y login de usuarios pueden hacerse levantando el servidor y corriendolo desde el navegador.
Tener en cuenta que si se quisiera usar este proyecto como API Rest hay que hacer modificaciones menores para devolver al front las respuestas requeridas en vez del res.render usados actualmente.

### GET:  /api/users/registro

Desde el navegador, nos envia al render con el formulario de registro.

### POST:  /api/users/registro

Se ejecuta cuando al enviar el formulario de la ruta GET.
Nos crea un usuario en la base de datos y nos manda a la ruta de envio de mail de nuevo usuario.

### GET:  /api/users/errorRegistro

Ruta creada para renderizar el error al crear un nuevo usuario por ingresar un mail ya registrado.

### GET:  /api/users/mailRegistro

Fue una ruta auxiliar creada para mandar el mail de confirmación al nuevo usuario. Si la app se usara como una API REST podria pasarse este codigo a un middleware en vez de una ruta.
Esta ruta nos redirige al login luego de enviar el mail.

### GET:  /api/users/login

Desde el navegador nos renderiza el formulario de Login

### POST:  /api/users/registro

Se ejecuta al enviar el formulario.
Nos crea una sesion y un token de authentificación y nos deja ingresar a la pagina principal de la app.
En este caso el Token se pasa por consola porque no tenemos un front para recibirlo y enviarlo de regreso.
Si queresmos usarlo como API Rest hay que cambiar esta logica por la que esta comentada.

### GET:  /api/users/errorLogin

Ruta creada para renderizar una vista de error en caso de que el usuario y la contraseña no sean validos.

### GET:  /api/users/logout

Ruta creada para confirmar al usuario que la session fue terminada correctamente.


## Endpoints Protegidos (Requieren Token)

Como enviar un token desde Insomnia o Postman?
Completar la seccion Headers con:
**Header: authorization**
**Value: "bearer" + " " + token**

## Rutas de productos

Salvo la ruta get products, las rutas de esta seccion no tienen creadas una vista en EJS, por lo tanto hay que usarlas desde Insomnia o Postman 

### GET:  /api/productos

Esta es la unica ruta que esta armada con EJS, nos muestra tarjetas con la foto e información de los distintos productos cargados.

### POST: /productos/

Guarda un nuevo productos.

**Datos requeridos:**

>   {
>   "nombre": nombre del producto, 
>   "descripcion": descripción del producto,
>   "codigo": codigo del producto (no el ID, seria para el trackeo comercial)
>   "thumbnail": URL de la imágen lel producto, 
>   "price": precio
>   "stock": stock
>   }

### GET: /api/productos/id del producto



Nos devuelve el producto con el ID enviado por params

### POST: /productos/

Guarda un nuevo producto

**Datos requeridos:**

> { "name": nombre del producto, "description": descripción del
> producto, "thumbnail": URL de la imágen lel producto, "price": precio
> del producto, "category": categoria del producto }

### PUT: /productos/id del producto

Actualiza un producto

**Datos requeridos:**

> { "name": nombre del producto, "description": descripción del
> producto, "thumbnail": URL de la imágen lel producto, "price": precio
> del producto, "category": categoria del producto }

### DELETE: /productos/id del producto

Elimina un producto por su ID

### POST: /carrito

Crea un carrito de compras

**Datos requeridos:**

> { "email": email del usuario, "adress": dirección de entrega del producto }

### GET: /carrito

Nos muestra todos los carritos de compra

### GET: /carrito/id del carrito

Nos muestra el carrito según su ID

### DELETE: /carrito/id del carrito

Elimina un carrito según su Id

### POST: /carrito/id del carrito/productos/id del producto

Agrega un producto al carrito según el id del carrito y del producto

**Datos requeridos:**

> { "quantity": cantidades del producto agregar }

### PUT: /carrito/id del carrito/productos/id del producto

Actualiza un producto al carrito según el id del carrito y del producto

**Datos requeridos:**

> { "quantity": cantidad del producto actualizada }

### DELETE: /carrito/id del carrito/productos/id del producto

Elimina un producto del carrito según el id del carrito y del producto

### DELETE: /carrito/id del carrito/productos

Elimina todos los productos del carrito según el id del carrito


### POST: /ordenes/id del carrito
Crea una orden de compra segun el id del carrito con el email del usuario logeado y el detalle de los productos que fueron comprados, además del precio total de la compra. Una vez creada la orden, se borra el carrito de compras.


### GET: /ordenes

Nos muestra todas la ordenes de compra generadas

### GET: /ordenes/num de orden

Nos muestra la orden de compra según el número de la orden

### DELETE: /ordenes/num de orden

Elimina la orden de compra según el número de la orden

### GET: /chat

Nos muestra todos los mensajes del chat

### POST: /chat

Guarda un mensaje del chat

**Datos requeridos:**

> { "email": usuario,
> "user": las opciones son usuario o sistema,
> body: mensaje que envia el usuario 
    }

### DELETE: /chat

Elimina todos losmensajes del chat

---
El proyecto cuenta con 2 vistas cuando vamos a la ruta principal del mismo nos lleva a **/auth/login** . Al hacer login nos lleva a la ruta **/mensajes** donde se encuentra el chat,  una vez que estemos logeados, podemos enviar y recibir mensajes
