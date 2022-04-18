const express = require('express');
const router = express.Router();
const piecesController = require('../controllers/piecesController')

router.post('/pieces', (piecesController.createPieces));
router.get('/pieces', (piecesController.findAllPieces));
router.get('/pieces/:idPiece', (piecesController.findOnePiece));
router.patch('/pieces/:idPiece', (piecesController.updateOnePiece));
router.put('/pieces/:idPiece', (piecesController.modifyOnePiece));
router.delete('/pieces/destroy/:idPiece', (piecesController.destroyOnePiece));
router.delete('/pieces/:idPiece', (piecesController.softDeleteOnePiece));


module.exports = router