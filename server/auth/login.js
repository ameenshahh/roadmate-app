const { User } = require("../models");
const jwtUtil = require("../auth/lib/jwt");
const { hash } = require("./lib/password");
const getUserById = require("./lib/getUserById");
const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);

  // Password ReHashing
  let password;
  try {
    password = hash(req.body.password);
  } catch (e) {
    return responder.crash();
  }

  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return responder.unauthorized({ message: "User not found" });
    }

    // checking password
    if (user.password != password) {
      return responder.unauthorized({ message: "Invalid credentials" });
    }

    // Generate Tokens
    let access_token = jwtUtil.sign({
      id: user.id,
      email: user.email,
    });

    let userData = await getUserById(user.id);

    return responder.success({
      payload: {
        login_status: userData ? true : false,
        access_token: access_token,
      },
    });
  } catch (e) {
    return responder.crash();
  }
};
