//usando objeto express
const express = require('express')
const app = express() //app de express
app.use(express.json) //indicamos que usaremos JSON
const port = 3000 //puerto de la app

//HTTP methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${newDate()}`)
    const explorer1 = { id: 1, name: 'GadgetL1' }
    const explorer2 = { id: 2, name: 'GadgetL2' }
    const explorer3 = { id: 3, name: 'GadgetL3' }
    const explorer4 = { id: 4, name: 'GadgetL4' }
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//inicializando la app
app.listen(port, () => {
    console.log(`
                    Example aa listening on port $ { port }
                    `)
})