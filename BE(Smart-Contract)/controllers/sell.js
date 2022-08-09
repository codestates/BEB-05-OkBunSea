module.exports = (req, res) => {
    const body = req.body
    console.log(`sell-2) BE(SC) : requset ${JSON.stringify(body)}`)
    res.status(200);
    res.send(`Success for selling (${JSON.stringify(body)})`);
};
