const User = require("../../models").User;
const { Op } = require("sequelize");

module.exports = async ({ email }) => {
  const filter = {
    email: email,
  };
  
  const user = await User.findOne({ where: filter });
  return user;
};
