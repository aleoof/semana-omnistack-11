const connectiom = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connectiom('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            res.status(400).json({ error: "No ong found whit this ID" })
        }


        return res.json({ ong })
    }
}