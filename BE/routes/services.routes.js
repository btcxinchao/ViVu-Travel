const express = require('express');
const router = express.Router();

const servicesController = require('../controllers/services.controller.js');
const { verifyToken, authorizeRoles } = require('../middlewares/auth.middlewares.js');
const upload = require('../middlewares/uploads.js');

// Middleware auth
const CheckProvider = [verifyToken, authorizeRoles('provider')];
const CheckPU = [verifyToken, authorizeRoles('provider', 'user')];

// Upload nhiều field
const uploadFields = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "images", maxCount: 10 }
]);
//CheckPU,
// Routes
router.post('/add', uploadFields, servicesController.addServices);

router.put('/put/:id', CheckProvider, uploadFields, servicesController.putServices);

router.patch('/patch/:id', CheckProvider, uploadFields, servicesController.patchServices);

router.get('/detail/:id',  servicesController.servicesDetail);

router.get('/all', servicesController.allServices);

router.delete('/deleteMany', CheckProvider, servicesController.deleteServices);

router.delete('/deleteOne/:id', CheckProvider, servicesController.deleteOne);

module.exports = router;