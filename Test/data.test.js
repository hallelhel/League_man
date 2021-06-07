const {generateText} = require('../Data_Layer/sqlScript');

test('col hakvod!!!!!', () =>{
    const text = getFromTable('User', 29);
    expect(text).toBe('hallel (29 years old)');
});


async function getFromTable(tableName, lookUpValuesArray, constraint=null){//constraint =[username=noam, password=1243]
    let valString ="";
    lookUpValuesArray.forEach(x=> valString = valString.concat(x.toString(),', '));
    let addOns = '';
    if (constraint[0]){
        addOns = ' WHERE '
        constraint.forEach(x=> addOns.concat(x, ' AND '));
        addOns = addOns.slice(0,5);
    }
    const dbQuery = `SELECT '${valString}' FROM '${tableName}'`.concat(addOns);
    return await DButils.execQuery(dbQuery);
}