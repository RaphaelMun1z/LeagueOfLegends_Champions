const express = require("express")
const router = express.Router()

const path = require("path")

const basePath = path.join(__dirname, '../templates')

router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/addChampion.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const lane = req.body.lane

    console.log(`O nome do campeão é ${name} e sua principal rota é ${lane}.`)
    
    res.sendFile(`${basePath}/addChampion.html`)
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    console.log(`Estamos buscando pelo campeão: ${id}`)

    res.sendFile(`${basePath}/champions.html`)
})

module.exports = router