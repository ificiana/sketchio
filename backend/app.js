const { createServer } = require('http')
const app = require('express')
const { constants } = require('buffer')
const server = createServer(app)
const io = require('socket.io')(server)
const PORT = 8000
const eventHandlers = require('./eventHandlers').default(io)

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
io.on('connection', eventHandlers)
