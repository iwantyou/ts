
import express = require('express')
import { router } from './router'

let PORT:number = 3001
let HOST:string = "localhost" 
const app: express.Application = express()

app.use('/', router)
app.listen(PORT, HOST, () => {
    console.log('app running ...')
})
