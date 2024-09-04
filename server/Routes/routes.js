const routes = require('express').Router();
const controller = require('../Controller/controller')

routes.route('/api/categories')
.get(controller.create_Categories)


module.exports = routes;
