const express = require('express');
const router = express.Router()
const servicesController = require('../controllers/services.controller.js')

// POST:  thêm 
router.post('/addServices',servicesController.addServices)

//PUT : sửa 
router.put('/updateServices/:id',servicesController.updateServices)

//DELETE 1 : xóa 
router.delete('/deleteOne/:id',servicesController.deleteOne)
//xóa nhiều 
router.post('/deleteServices',servicesController.deleteServices)

//GET chi tiết 1 
router.get('/servicesDetail/',servicesController.servicesDetail)

//GET tất cả 
router.get('/allServices',servicesController.allServices)





module.exports = router