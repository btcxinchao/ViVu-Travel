const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller.js');
const { verifyToken, authorizeRoles } = require('../middlewares/auth.middlewares.js');
const upload = require('../middlewares/uploads.js');
const CheckProvider = [verifyToken, authorizeRoles('provider')]
const CheckPU = [verifyToken, authorizeRoles('provider', 'user')]
const upFile = upload.single("image")
//CheckProvider,

router.post('/add', upFile, servicesController.addServices);
router.put('/put/:id', CheckProvider, upFile, servicesController.putServices);
router.patch('/patch/:id', CheckProvider, upFile, servicesController.patchServices);
router.get('/Detail/:id', CheckPU, servicesController.servicesDetail);
router.get('/all', servicesController.allServices);
router.delete('/deleteMany', CheckProvider, servicesController.deleteServices);
router.delete('/deleteOne/:id', CheckProvider, servicesController.deleteOne);

module.exports = router;
