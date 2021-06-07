const {generateText} = require('../Data_Layer/sqlScript');

test('col hakvod!!!!!', () =>{
    const text = getFromTable('User', 29);
    expect(text).toBe('hallel (29 years old)');
});


