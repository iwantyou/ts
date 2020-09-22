import express = require('express')

const router: express.Router = express.Router()

router.use('/', (req:express.Request, res:express.Response) => {
    if(req.url === "/"){
        res.json({
            status: 200,
            data: '124'
        })
    }
}) 

export { router }