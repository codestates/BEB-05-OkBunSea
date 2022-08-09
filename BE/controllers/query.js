module.exports = (req, res) => {
    const body = req.body
    console.log("============")
    console.log(`query-1) BE : requset ${JSON.stringify(body)}`)
    const options = {
        uri:'http://localhost:4001/query', 
        method: 'POST',
        body: body,
        json:true
    }
    var request = require('request');
    request.post(options, function(err,response,body){
        res.status(200);
        res.send(body);
    })
};
