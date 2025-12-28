const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ status: false });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(data.id);

        if (!user) {
            return res.json({ status: false });
        }

        return res.json({ status: true, user: user.username });

    } catch (err) {
        return res.json({ status: false });
    }
};
