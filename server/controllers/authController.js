const User = require('../models/User');

const login = async (req, res) => {
    const { facebookId, name, email, picture } = req.body;
    try {
        let user = await User.findOne({ facebookId });
        if (!user) {
            user = new User({ facebookId, name, email, picture });
            await user.save();
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { login };
