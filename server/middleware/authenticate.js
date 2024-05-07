const { getUserById,jwtVerify } = require("../auth");
const Responder = require("../shared/responder");

module.exports = async (req, res, next) => {
  const responder = new Responder(res);
  // Check for token in the header
  const headers = req.headers;
  const ACCESS_TOKEN_HEADER = "x-access-token";

  if (!headers[ACCESS_TOKEN_HEADER]) {
    return responder.unauthorized({ message: "No access token header" });
  }

  const access_token = headers[ACCESS_TOKEN_HEADER];

  try {
    const decoded = jwtVerify(access_token);
    const user = await getUserById(decoded.id);

    if (!user) return responder.unauthorized({ message: "No user exists" });
    if (user.is_blocked)
      return responder.unauthorized({ message: "The user is blocked" });

    req["user"] = user;
    next();
  } catch (e) {
    return responder.crash();
  }
};
