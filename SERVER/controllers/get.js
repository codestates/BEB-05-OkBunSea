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
    
    const Hash = body.hash;
    let downloadFile;
    ipfs.files.get(Hash, (err,files)=>{
    files.forEach((file) =>{
    downloadFile = file.content.toString('utf8')

    res.status(200)
    res.send(downloadFile);

    })
})     

};
