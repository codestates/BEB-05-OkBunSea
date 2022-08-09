module.exports = (req, res) => {

    const body = req.body
    res.status(200);
    res.send(`sell : ${JSON.stringify(body)}`);
};
