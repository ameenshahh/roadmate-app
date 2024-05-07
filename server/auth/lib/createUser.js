const User = require("../../models").User;

module.exports = async ({ name,email, password }) => {
  try {
    const response = await User.create({ name,email, password });
    return response;
  } catch (e) {
    throw e;
  }
};
