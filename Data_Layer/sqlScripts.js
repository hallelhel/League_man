
var express = require("express");
const DButils = require("../Data_Layer/DButils");
const bcrypt = require("bcryptjs");

async function insertinto(tableName, tableColNames, valuesArray){
    try{
        let valString ="";
        let colNameString = '';
        tableColNames.forEach(x=> colNameString = colNameString.concat(x.toString(),', '));
        valuesArray.forEach(x=> valString = valString.concat(x.toString(),', '));
        valString.slice(0,2);
        colNameString.slice(0,2);
        await DButils.execQuery(
            `INSERT INTO '${tableName}' '${colNameString}' VALUES ('${valString}')`
          );
        return true;
    }
    catch{return false;}
}

async function updateTable(tableName, updateValuesArray, constraintStringArray=null){
    try{
        let valString ="";
        updateValuesArray.forEach(x=> valString = valString.concat(x.toString(),', '));
        valString = valString.slice(0,2);
        if (constraintStringArray){
            let constraintString = '';
            constraintStringArray.forEach(x=> constraintString = constraintString.concat(x.toString(),', '));
            constraintString.slice(0,2);
            valString= valString.concat(' WHERE ', constraintString);
        }
        const query =`UPDATE '${tableName}' SET '${updateValuesString}' `.concat(valString) 
        await DButils.execQuery(query);
        return true;
    }
    catch{return false;}
}

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

async function getFromSoccerAPI(finalAPI, include =null){//get data from soccer api, include='team, league'
    try{
        address = `${api_domain}`.concat('/', finalAPI);
        const data = await axios.get(address, {
            params: {
              include: include,
              api_token: process.env.api_token,
            },
          });
        return data
    }
    catch{return false;}

}

exports.insertinto = insertinto;
exports.getFromTable = getFromTable;
exports.getFromSoccerAPI =getFromSoccerAPI;
exports.updateTable = updateTable;