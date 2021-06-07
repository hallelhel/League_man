const {getFromTable} = require('../Data_Layer/sqlScripts');

test('Get table from db', () =>{
    const text = getFromTable('dbo.Users', ['*'],[`username=noam`]);
    expect(text).toBe('');
});


