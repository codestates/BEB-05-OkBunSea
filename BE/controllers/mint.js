/*
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
  "external_url": "https://openseacreatures.io/3", 
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
  "name": "Dave Starbelly",
  "attributes": [ ... ], 
}
*/

module.exports = (req, res) => {
    const body = req.body
    const options = {
        uri:'http://localhost:4001/mint', 
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
