const express = require('express')
const pdf = require('html-pdf')
const cors = require('cors')

// const pdfTemplate = require('./documents')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`))