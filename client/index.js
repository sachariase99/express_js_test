import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.config.js'
dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/songs', (req, res) => {
    db.query(`SELECT s.id, s.title, a.name FROM song s JOIN artist a ON s.artist_id = a.id`, (error, result) => {
        res.json(result)
    })
})

app.get('/songs/:id([0-9]*)', (req, res) => {
    const { id } = req.params
    const sql = `SELECT s.id, s.title, s.content, s.artist_id, a.name FROM song s JOIN artist a ON s.artist_id = a.id WHERE s.id = ${id}` 
    db.query(sql, (error, result) => {
        res.json(result)
    })
})

app.get('*', (req, res) => {
    res.send('404 Page!')
})

app.listen(port, () => {
    console.log(`Vi kører på port: http://localhost:${port}`)
})