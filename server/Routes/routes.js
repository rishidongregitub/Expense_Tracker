const routes = require('express').Router();
const controller = require('../Controller/controller');

routes.route('/api/categories')
    .post(controller.create_Categories)
    .get(controller.get_Categories)

module.exports = routes;
