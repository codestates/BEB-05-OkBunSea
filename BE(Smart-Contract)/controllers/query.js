module.exports = (req, res) => {
    const body = req.body
    console.log(`query-2) BE(SC) : requset ${JSON.stringify(body)}`)
    res.status(200);
    res.send(`query : ${JSON.stringify(body)}`);
};

/*
    [
        {
            id:0,
            urihttp://~!
        },
        {
            id:12,
            uri:http://!@
        }
    ]
    실제론 위와 같은 형식의 nft리스트를 리턴해주어야 함
*/