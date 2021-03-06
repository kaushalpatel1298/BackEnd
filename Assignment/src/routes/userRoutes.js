const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router();

router.route("/").get(userController.getUser);
router.route("/signup").post(userController.signUp);

module.exports = router;