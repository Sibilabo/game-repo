const express = require('express');
const router = express.Router();
const Game = require ('../models/Game');

//Pobierz wszystkie gry
router.get('/', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

//Dodaj nową grę
router.post('/', async (req, res) => {
    const newGame = new Game(req.body);
    await newGame.save();
    res.json(newGame);
});

//Usuń grę
router.delete('/:id', async (req, res) =>{
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Game deleted' });
});

module.exports = router;