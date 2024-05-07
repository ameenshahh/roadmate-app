const User = require("../../models").User;

module.exports = async (user) => {
  // Defining Params
  const params = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  try {
    const response = await User.create(params);
    return response;
  } catch (e) {
    throw e;
  }
};
