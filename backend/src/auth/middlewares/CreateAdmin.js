const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ username: "admin" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin", 10);

      const newAdmin = new User({
        username: "admin",
        email: "admin@admin.com",
        password: hashedPassword,
        role: "admin",
        lastLogin: Date.now(),
      });

      await newAdmin.save();
      console.log("Usuario admin creado con éxito");
    } else {
      console.log("El usuario admin ya existe");
    }
  } catch (error) {
    console.error("Error al crear el usuario admin:", error);
  }
};

module.exports = createAdmin;
