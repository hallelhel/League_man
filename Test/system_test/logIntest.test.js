
const app = require('../../Service_Layer/authService') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')

    // ...
    done()
  })