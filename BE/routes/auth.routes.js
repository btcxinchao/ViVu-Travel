const express = require('express');
const router = express.Router()
const authController = require('../controllers/auth.controller.js')

// Đăng ký, đăng nhập, đăng xuất
router.post('/register',authController.register)
router.post('/login',authController.login)
router.post('/logout',authController.logout)


module.exports = router