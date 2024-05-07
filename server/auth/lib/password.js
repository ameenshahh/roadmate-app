const crypto = require("crypto")

const hash = (password) => {
    const salt = '3b77aba17751a6f7e49285d250befbab'
    return crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);
}

module.exports = { hash }