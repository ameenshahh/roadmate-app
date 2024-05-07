const { User } = require("../../models");
module.exports = async (id) => {
  const filter = {
    id: id,
  };
  try {
    let user;
    user = await User.findOne({ where: filter });
    return user;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
