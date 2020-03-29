const express = require('express');

const IncidentsControler = require('./controlers/IncidentControler')
const ProfileControler = require('./controlers/ProfileControler')
const OngControler = require('./controlers/OngControler')
const SessionControler = require('./controlers/SessionControler')

const routes = express.Router()

routes.post('/sessions', SessionControler.create)

routes.post('/ongs', OngControler.create)
routes.get('/ongs', OngControler.list)

routes.post('/incidents', IncidentsControler.create)
routes.get('/incidents', IncidentsControler.list)
routes.delete('/incidents/:id', IncidentsControler.delete)

routes.get('/profile', ProfileControler.search)

module.exports = routes