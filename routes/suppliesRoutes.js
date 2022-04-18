const express = require('express')
const router = express.Router()
const suppliesController = require('../controllers/suppliesController')

router.post('/supplies', (suppliesController.createSupplies))
router.get('/supplies', (suppliesController.findAllSupplies))
router.get('/supplies/:idSupply', (suppliesController.findOneSupply))
router.patch('/supplies/:idSupply', (suppliesController.updateOneSupply))
router.put('/supplies/:idSupply', (suppliesController.modifyOneSupply))
router.delete('/supplies/destroy/:idSupply', (suppliesController.destroyOneSupply))
router.delete('/supplies/:idSupply', (suppliesController.softDeleteOneSupply))

module.exports = router