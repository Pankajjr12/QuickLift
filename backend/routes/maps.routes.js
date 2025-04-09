const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewars/auth.middleware')
const mapController = require('../controllers/map.controller');
const { query } = require('express-validator');

console.log(typeof authMiddleware.authUser); // Should be 'function'

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,  // Ensure this is a function
    mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapController.getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
)
module.exports = router;


