module.exports = (req, res) => {
    console.log(req)
    const body = req.body
    res.status(200);
    res.send(`query : ${JSON.stringify(body)}`);
};
