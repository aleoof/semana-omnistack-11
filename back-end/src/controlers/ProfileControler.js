const connectiom = require('../database/connection')

module.exports = {
    async search(req, res) {
        const ong_id = req.headers.authorization;

        const incidents = await connectiom('incidents')
            .where('ong_id', ong_id)

            .select('*');

        return res.json({ incidents })
    },
}