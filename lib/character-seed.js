const express = require('express')

const Character = require('../models/character')

const router = express.Router()

const startCharacters = [
	{
		firstName: 'Eren',
		lastName: 'Jaeger',
		class: 'Titan',
		strength: 90,
	},
	{
		firstName: 'Mikasa',
		lastName: 'Ackerman',
		class: 'Cadet',
		strength: 120,
	},
	{
		firstName: 'Armin',
		lastName: 'Arlet',
		class: 'Cadet',
		strength: 60,
	},
]

router.get('/characters', (req, res, next) => {
	Character.deleteMany({})
        .then(() => {
            Character.create(startCharacters)
                .then((characters) => res.status(200).json({ characters: characters }))
        })
        .catch(next)
})

module.exports = router