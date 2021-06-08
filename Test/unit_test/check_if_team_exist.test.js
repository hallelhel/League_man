
// jest.mock('axios');

const {checkIfTeamExist} = require('../../Domain_Layer/utils/teams_utils');

test('check test unit team exist', () =>{
    const testRealTeam = checkIfTeamExist(939);
    expect(testRealTeam).toBe(true);
});


