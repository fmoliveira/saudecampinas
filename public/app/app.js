/* global angular */

'use strict'

/* Bibliotecas do Angular */
require('angular')
require('angular-route')

/* Inicializa o app Angular */
angular.module('HackathonApp', [
  'ngRoute'
])

/* Carrega os seviços para acesso a dados */
require('./services/regioes')
require('./services/unidades')
require('./services/especialidades')

/* Carrega os controllers */
require('./controllers/home')