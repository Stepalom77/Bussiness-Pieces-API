const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController')

router.post('/categories', (categoriesController.createCategories));
router.get('/categories', (categoriesController.findAllCategories));
router.get('/categories/:idCategory', (categoriesController.findOneCategory));
router.patch('/categories/:idCategory', (categoriesController.updateOneCategory));
router.put('/categories/:idCategory', (categoriesController.modifyOneCategory));
router.delete('/categories/destroy/:idCategory', (categoriesController.destroyOneCategory));
router.delete('/categories/:idCategory', (categoriesController.softDeleteOneCategory));


module.exports = router;