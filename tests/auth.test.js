const request = require('supertest')
const app = require('../app')

describe('auth', () => {
  describe('GET /login', () => {
    it('should login successfully', (done) => {
      request(app)
        .get('/login')
        .auth('username', 'password')
        .expect(200, 'Logged in', done)
    })
  })
})
