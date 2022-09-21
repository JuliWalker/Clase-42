import { MongoDBUsers } from '../daos/users/usersDao.js'
import dotenv from 'dotenv'
dotenv.config()

export default class UsersFactory{
    static getDao(){
        return new MongoDBUsers()
    }
}

// no estoy usando los archivos de Factory porque me tira error de que no es un constructor la funcion Static GetDao