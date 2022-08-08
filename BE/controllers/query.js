module.exports = (req, res) => {
    console.log(req)
    const body = req.body
    res.status(200);
    res.send(`buy : ${JSON.stringify(body)}`);
};
