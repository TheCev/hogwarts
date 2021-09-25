const express = require('express');
const path = require('path')
const app = express()

//config
app.set('port', process.env.PORT || 3000)

//Middlewares
    app.use(express.json())
    app.use(express.static(path.join(__dirname, '../dist')))

    //Routes
    app.use('/*', (req ,res ) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'))
    })

    app.listen( app.get('port'), () => {
    	console.log('Express server is running on port: ' , app.get('port'))
    })