/**
 * app.js
 * This is the main file
 * 
 * Author: Michael Chang
 * 
 * Copyright © 2021
 */

const cors = require('cors')
const express = require('express')
// const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'BookBites API',
            description: "",
            contact: {
                name: "Michael Chang"
            },
            servers: ["https://localhost:5000"]
        }
    },
    apis: ["app.js"]
}

const swaggerJsDocs = swaggerJsDoc(swaggerOptions)

const app = express()

// require('dotenv/config')

app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDocs))

/**
 * @swagger
 * /test:
 *  get:
 *    description: Testing out the API 
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/test', (req, res) => {
    res.json({
        message: 'Welcome to BookBites📚 !!'
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})