const coreMediator = require('./core_mediator')
const expect = require('chai').expect
const http = require('http')

describe('Core Mediator', () => {
	it('start core mediator app', () => {
		const port 		= 3200
		const app 		= coreMediator(port)

		const request 	= http.get(`http://localhost:${port}`, 
			res => console.log(res.status)
		);
		expect(res.status).to.equal(200)
	})
})