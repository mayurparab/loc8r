var express = require('express');
var router = express.Router();

const cntrlLocations = require('../controllers/locations');
const cntrlOthers = require('../controllers/others');

/* GET locations page. */
router.get('/', cntrlLocations.homelist);
router.get('/location', cntrlLocations.locationInfo);
router.get('/location/review/new', cntrlLocations.addReview);

/* GET About page. */
router.get('/about', cntrlOthers.about);

module.exports = router;
