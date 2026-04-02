const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services.controller.js');
const { verifyToken, authorizeRoles } = require('../middlewares/auth.middlewares.js');
const upload = require('../middlewares/uploads.js');


// tạm thời chưa thêm verifyToken, authorizeRoles('provider'), để test 
router.post('/add', upload.single("image") ,servicesController.addServices);

router.put('/put/:id', upload.single("image"), servicesController.putServices);
router.patch('/patch/:id', upload.single("image"), servicesController.patchServices);

router.get('/servicesDetail/:id', servicesController.servicesDetail);
router.delete('/deleteServices', verifyToken, authorizeRoles('provider'), servicesController.deleteServices);
router.get('/servicesDetail/:id', servicesController.servicesDetail);
router.get('/allServices', servicesController.allServices);

module.exports = router;
