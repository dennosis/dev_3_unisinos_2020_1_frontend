const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const car_controller = require('../controllers/car.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', car_controller.test);
router.post('/create', car_controller.car_create);
router.get('/:id', car_controller.car_details);
router.put('/:id/update', car_controller.car_update);
router.delete('/:id/delete', car_controller.car_delete);

module.exports = router;