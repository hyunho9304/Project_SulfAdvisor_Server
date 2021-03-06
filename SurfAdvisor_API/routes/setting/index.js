var express = require('express');
var router = express.Router();

//	schedule 관련
const schedule = require( './schedule' ) ;
router.use( '/schedule' , schedule ) ;

//	photo surfShopPhoto upload 관련
const surfShopPhoto = require( './surfShopPhoto' ) ;
router.use( '/surfShopPhoto' , surfShopPhoto ) ;

//	photo restaurantPhoto upload 관련
const restaurantPhoto = require( './restaurantPhoto' ) ;
router.use( '/restaurantPhoto' , restaurantPhoto ) ;

//	photo hotelPhoto upload 관련
const hotelPhoto = require( './hotelPhoto' ) ;
router.use( '/hotelPhoto' , hotelPhoto ) ;

module.exports = router;
