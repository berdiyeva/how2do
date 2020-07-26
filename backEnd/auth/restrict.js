const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	try {
		const token = req.headers.token;

		if (!token) {
			return res.status(401).json({ message: "Missing token!" });
		}

		jwt.verify(
			token,
			process.env.JWT_SECRET || "secret",
			(err, decodePayload) => {
				if (err) {
					console.log(err);
					return res.status(403).json({ message: "Invalid access token." });
				} else {
					req.decodePayload = decodePayload;
					next();
				}
			}
		);
	} catch (err) {
		res.status(401).json({ you: "shall not pass!" });
	}
};
