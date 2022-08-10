/*
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
  "external_url": "https://openseacreatures.io/3", 
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
  "name": "Dave Starbelly",
  "attributes": [ ... ], 
}
*/
const IpfsApi = require('ipfs-api');
var fs = require('fs');
const ipfs = IpfsApi("ipfs.infura.io", "5001", { protocol: "https" });

module.exports = (req, res) => {
    const body = req.body
    console.log(`mint-2) DB : requset ${JSON.stringify(body)}`)

    //IPFS UPLOAD & HASH GET
    //접속 : https://ipfs.io/ipfs/{해시값}
    
    fs.writeFileSync('temp.json', JSON.stringify(body))

    const file = fs.readFileSync('temp.json')

    ipfs.files.add(file)
        .then((result) => {
            res.status(200)
            res.send(`https://ipfs.infura.io/ipfs/${result[0].hash}`);
        });

};
