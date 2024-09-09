const axios = require('axios');

const getInsights = async (req, res) => {
    const { pageId, accessToken, since, until, period } = req.body;
    try {
        const response = await axios.get(`https://graph.facebook.com/${pageId}/insights?since=${since}&until=${until}&period=${period}&access_token=${accessToken}`);
        res.status(200).json(response.data.data);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getInsights };
