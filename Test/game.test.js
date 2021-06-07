
const { test, expect } = require('@jest/globals');
const {checkIfGameDetailsInFuture} = require('../Domain_Layer/utils/games_utils');
const {checkGameDetails} = require('../Domain_Layer/utils/games_utils');


test('check test unit game', () =>{
    const testBadDate = checkIfGameDetailsInFuture('2021-5-31', '20:30:00');
    expect(testBadDate).toBe(false);
    const testInvaildeInput = checkIfGameDetailsInFuture('2021-k5-31', '20:30:00');
    expect(testInvaildeInput).toBe(false);
    const testGoodDate = checkIfGameDetailsInFuture('2022-5-31', '20:30:00');
    expect(testGoodDate).toBe(true);
    // const testBadTime = checkIfGameDetailsInFuture('2021-6-7', '17:30:00');
    // expect(testBadTime).toBe(false);
    // const testGoodTime = checkIfGameDetailsInFuture('2022-6-7', '21:30:00');
    // expect(testGoodTime).toBe(true);
});

// test('check game details', () =>{
//     const testGoodGameDetailes = checkGameDetails({away_team_id: 939, date: '2022-5-31',
// field: 'Tedi', home_team_id: 1020, hour: '20:30:00', referee_username: 'noam'});
// expect(testGoodGameDetailes).toBe("");
// });



