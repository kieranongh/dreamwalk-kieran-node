var express = require('express');
var router = express.Router();
var carDB = require('../db/car-db')

/* GET cars listing. */
router.get('/supercar', function(req, res, next) {
  const carList = carDB.getCars1()
  res.json(carList)
});

router.get('/4wd', function(req, res, next) {
  const carList = carDB.getCars2()
  // const carList = [
  //   {
  //     name: 'Ferrari'
  //   },
  //   {
  //     name: 'Jeep'
  //   }
  // ]
  
  res.json(carList)
});

module.exports = router;