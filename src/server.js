const express = require('express')
const http = require('http')

// Page installers
const installLogin = require('./login/LoginInstaller')
const installDashboard = require('./dashboard/DashboardInstaller')

// Define our app
var app = express()

// Using nunjucks for html templating
var nunjucks = require('nunjucks')
nunjucks.configure('src',{watch:true})

// Get this thing going
var server = http.createServer(app)
server.listen(3000)
app.use(express.static('build'))
installLogin(app)
installDashboard(app)
