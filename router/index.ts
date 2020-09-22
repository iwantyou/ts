import express = require('express')

const router: express.Router = express.Router()

router.use('/api', (req:express.Request, res:express.Response) => {
 
        res.json({
            status: 200,
            data: '124'
        })
}) 
router.use('/index', (req:express.Request, res:express.Response) => {
     res.setHeader('content-Type', "text/html")
     res.json({
        status: 200,
        data: '<h1>12555</h1>'
    })
})

export { router }