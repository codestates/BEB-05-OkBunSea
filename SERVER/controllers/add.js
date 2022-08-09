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
    console.log(`mint-2) DB : requset ${JSON.stringify(body)}`)
    res.status(200);
    res.send('https://raw.githubusercontent.com/codestates/BEB-05-OkBunSea/main/FE/public/logo512.png');
};
