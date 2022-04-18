const express = require('express')
const router = express.Router()
const suppliersController = require('../controllers/suppliersController')

router.post('/suppliers', (suppliersController.createSupplier))
router.get('/suppliers', (suppliersController.findAllSuppliers))
router.get('/suppliers/:idSupplier', (suppliersController.findOneSupplier))
router.patch('/suppliers/:idSupplier', (suppliersController.updateOneSupplier))
router.put('/suppliers/:idSupplier', (suppliersController.modifyOneSupplier))
router.delete('/suppliers/destroy/:idSupplier', (suppliersController.destroyOneSupplier))
router.delete('/suppliers/:idSupplier', (suppliersController.softDeleteOneSupplier))

module.exports = router