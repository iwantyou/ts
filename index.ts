
import express = require('express')
import { router } from './router'

let PORT:number = 3000
let HOST:string = "localhost" 
const app: express.Application = express()

app.use('/', router)
app.listen(PORT, HOST, () => {
    console.log('app running ...')
})
