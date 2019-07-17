const omit = require('lodash.omit')

const VisitedModel = require('../models/visited.model')

module.exports = {
	addVisitor: (request, response) => {
		if (request.body.secret === 'hellokitty') {
			const data = new VisitedModel(omit(request.body, ['secret']))
			data.save((error) => {
				if (error) {
					response.status(500).json(error)
				} else {
					response.status(201).json(data)
				}
			})
		} else {
			response.status(401).json({
				message: 'Un-authorized access',
			})
		}
	},

	listVisitors(request, response) {
		VisitedModel.find()
			.then(data => response.status(200).json(data))
			.catch(error => response.status(500).json(error))
	}
}