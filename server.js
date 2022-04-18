require('dotenv').config();

const express = require("express")

//Routes view
const categoriesRoutes = require('./routes/categoriesRoutes')
const piecesRoutes = require('./routes/piecesRoutes')
const suppliersRoutes = require('./routes/suppliersRoutes')
const suppliesRoutes = require('./routes/suppliesRoutes')

const app = express()

//Middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
app.use('/api/v1', categoriesRoutes)
app.use('/api/v1', piecesRoutes)
app.use('/api/v1', suppliersRoutes)
app.use('/api/v1', suppliesRoutes)

//Port

app.listen(5001, () => {
    console.log('Server ON : 5001')
})