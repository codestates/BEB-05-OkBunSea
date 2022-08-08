module.exports = (req, res) => {

    const body = req.body
    res.status(200);
    res.send(`buy : ${JSON.stringify(body)}`);
};
