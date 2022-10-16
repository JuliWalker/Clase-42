import { MongoDBChat } from "../persistencia/daos/chat/chatDao.js";
import UsersServices from "../services/usersServices.js";

export default class chatController {
  constructor() {
    this.chatDao = new MongoDBChat();
    this.servicesUser = new UsersServices();
  }

  getMessages = async(req, res) => {
    try {
      const user = await this.servicesUser.getOne(req.session.passport.user);
      res.render("chat", { user });
    } catch (error) {
      console.log(`Error al buscar los mensajes. ${error}`);
      return res.status(500).json({ error_description: "Error del servidor." });
    }
  }

  async getUserMessages(req, res) {
    try {
      const user = req.session.user;
      if (!user) return res.redirect("/login");
      const messages = await chatDao.listAll();
      res.render("chat-admin", { messages });
    } catch (error) {
      console.log(`Error al buscar los mensajes del usuario. ${error}`);
      return res.status(500).json({ error_description: "Error del servidor." });
    }
  }

  async adminView(req, res) {
    try {
      const user = req.session.user;
      if (!user) return res.redirect("/login");
      const email = req.params.email;
      if (email != user.email) return res.redirect("/chat");
      const messages = await chatDao.listByEmail(email);
      res.render("chat-user", { messages });
    } catch (error) {
      console.log(`Error buscar los mensajes para el admin. ${error}`);
      return res.status(500).json({ error_description: "Error del servidor." });
    }
  }
}
