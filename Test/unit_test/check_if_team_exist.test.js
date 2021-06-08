
jest.mock('axios');
const {checkIfTeamExist} = require('../../Domain_Layer/utils/teams_utils');
// test('check team exist test',()=>{
//     checkIfTeamExist(939).then(team=>{expect(team).toBe()})
    
// }
test('check test unit team exist', () =>{
    const testBadDate = checkIfTeamExist(939);
    expect(testBadDate).toBe(true);
});
