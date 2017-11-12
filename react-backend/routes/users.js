var express = require('express');
var router = express.Router();
var imagemagick = require('imagemagick-native');
var fs = require('fs');
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('server is up and responding to users');
	//res.send('testing');
	// res.send(path.resolve(path.join('image_cache/created','capybara.jpg')));
	// var filestart = path.resolve(path.join('image_cache/created','capybara.jpg'));
	// var filefinal = path.resolve(path.join('image_cache/created','after.png'));

	// fs.writeFileSync(filefinal, imagemagick.convert({
	// 	srcData: fs.readFileSync(filestart),
	// 	format: 'PNG',
	// 	quality: 100 // (best) to 1 (worst) 
	// }));
	//imagemagick
});

router.post('/login', function(req, res, next){
	// res.json({
	// 	status: 'successful'
	// 	, username: 'amaddatu'
	// 	, firstname: 'Anthony'
	// 	, lastname: 'Maddatu'
	// 	, role: 'admin'
	// });
	res.json({
		status: 'poop'
	});
});

module.exports = router;
