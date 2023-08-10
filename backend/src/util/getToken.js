const getToken = (req) => req.headers.authorization?.split(" ")[1];

module.exports = { getToken };
