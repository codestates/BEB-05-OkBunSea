module.exports = async (req, res) => {
    const body = req.body
    const options = {
        uri:'http://localhost:4001/buy', 
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
