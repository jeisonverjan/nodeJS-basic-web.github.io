const express = require('express')

const app = express()
const path = require('path')

// Settings
app.set('port', 3000)
app.set('views', path.join(__dirname, './src/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


// Middleware


// Routes
app.use(require('./src/routes/index'))

// Static files
app.use(express.static(path.join(__dirname, './src/public')))

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})