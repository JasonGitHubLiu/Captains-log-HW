const express = require('express');

const router = express.Router();

const logController = require('../controllers/logController');

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemonss, attach it to router along with the controller logic
router.get('/', logController.index);

// Setup a "new" route for creating pokemons
router.get('/new', logController.new);

router.delete('/clear', logController.clear);

// Setup a "delete" route for removing a specific pokemons
router.delete('/:id', logController.delete);

// Setup a "update" route for updating a specific pokemons
router.put('/:id', logController.update);

router.post('/seed', logController.seed);

// Setup a "create" route for adding pokemons data
router.post('/', logController.create);

// Setup a "edit" route for editing a pokemons
router.get('/:id/edit', logController.edit);

// Setup an "show" route for pokemonss, attach it to router along with the controller logic
router.get('/:id', logController.show);

module.exports = router;
