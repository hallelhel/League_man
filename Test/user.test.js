
const {generateText} = require('../Domain_Layer/utils/users_utils');

test('shulf work!!!!!', () =>{
    const text = generateText('hallel', 29);
    expect(text).toBe('hallel (29 years old)');
});


// var axios = require("axios");
// // const expect = require("chai").expect
// let chaiHttp = require("chai-http");
// const chaiAsPromise = require("chai-as-promised");
// let chai = require('chai');
// const api_domain = "http://localhost:3000";
// const {testLogin} = require('../../League_man/Domain_Layer/users.js');

// // Log In tests
// describe('/POST login', () => {
//     it('OK, Correct username and password', async () => {
//         chai.request(`${api_domain}`)
//             .post('/login')
//             .send({username: 'admin', password: 'admin123'})
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.have.property('text').eql('Login succeeded')
//             });
//     });
// });
// expect(10).to.be(10)

// test('check log in', async()=>{
//     const response = await request(auth).post('/login').send({
//         username: 'admin',
//         password: 'admin123'
//     })
//     expect((response.statusCode).toBe(200))
// });


