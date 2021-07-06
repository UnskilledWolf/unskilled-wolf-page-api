import express from "express";
const router = express.Router();

// Routes
router.get('/', (req, res) =>
{
    const querry = req.query.q

    if (typeof querry === "string")
        res.sendStatus(200)
    else
        res.sendStatus(400)
})

module.exports = router