const express = require('express')
const router = express.Router()
const {addDetails, getAllDetails, updateDetails, deleteDetails} = require('../controllers/hospController')
const {validateId} = require('../controllers/idValidator')

router.route('/').post(addDetails).get(getAllDetails).patch(updateDetails).delete(deleteDetails)
router.route('/validate').post(validateId)

module.exports = router