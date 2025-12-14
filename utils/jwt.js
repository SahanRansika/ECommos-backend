const jwt = require("jsonwebtoken")

const ACCESS_SECRET = "access_secret_key";
const REFRESH_SECRET = "refresh_secret_key";

exports.signAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        ACCESS_SECRET,
        {expiresIn: "15m"}
    );
};

exports.signRefreshToken = (user) => {
    return jwt.sign(
        {id: user.id},
        REFRESH_SECRET,
        {expiresIn: "7d"}
    );
};