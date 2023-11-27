import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.send('404 Page!')
})

app.listen(port, () => {
    console.log(`Vi kører på port: ${port}`)
})