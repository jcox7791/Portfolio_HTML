const express = require('express');
const router = express.Router();
const fs = require('fs');
// Reading portfolio "JSON".
const getJSON = () => {
    return fs.readFileSync('./data/portfolio.json', 'utf-8');
}
let portfolioJSON=getJSON();
// console.log("im the get json: ",portfolioJSON);
// const parseJSON = (j) => {
//     return JSON.parse(j)
//   }
//   console.log()

router.get("/api/index",(req, res)=>{
    // console.log(json)
    res.send(portfolioJSON);
});

module.exports = router;