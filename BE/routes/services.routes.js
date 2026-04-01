const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller.js');
const { verifyToken, authorizeRoles } = require('../middlewares/auth.middlewares.js');



router.post('/deleteServices', verifyToken, authorizeRoles('provider'), servicesController.deleteServices);
router.get('/servicesDetail/:id', servicesController.servicesDetail);
router.get('/allServices', servicesController.allServices);

module.exports = router;
