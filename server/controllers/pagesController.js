const axios = require('axios');

const getPages = async (req, res) => {
    const { accessToken } = req.body;
    try {
        const response = await axios.get(`https://graph.facebook.com/me/accounts?access_token=${accessToken}`);
        res.status(200).json(response.data.data);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getPages };
