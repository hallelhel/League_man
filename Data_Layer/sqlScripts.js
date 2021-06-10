
var express = require("express");
const DButils = require("../Data_Layer/DButils");
const bcrypt = require("bcryptjs");
const api_domain = "https://soccer.sportmonks.com/api/v2.0";
const axios = require("axios");

/*
    ---SQL---
represent all query to DB 

*/


/*this function get: 
name of table in db, 
name of value=column of table
and values
and do the insert into query
*/
async function insertinto(tableName, tableColNames, valuesArray){
    try{
        let valString ="";
        let colNameString = '';
        tableColNames.forEach(x=> colNameString = colNameString.concat(x.toString(),', '));
        valuesArray.forEach(x=> valString = valString.concat(`'`,x.toString(),`'`,', '));
        valString = valString.slice(0,-2);
        colNameString = colNameString.slice(0,-2);
        const query = `INSERT INTO ${tableName} (${colNameString}) VALUES (${valString})`;
        await DButils.execQuery(query);
        return true;
    }
    catch{return false;}
}
/*this function get: 
name of table in db, 
name of value=record
and return the appropriate record
*/
async function getFromTable(tableName, lookUpValuesArray, constraint=null){//constraint =[username=noam, password=1243]
    let valString ="";
    lookUpValuesArray.forEach(x=> valString = valString.concat(x.toString(),', '));
    valString = valString.slice(0,-2);
    let addOns = '';
    if (constraint){
        addOns = ' WHERE '
        constraint.forEach(x=> addOns = addOns.concat(x, ' AND '));
        addOns = addOns.slice(0,-5);
    }
    const dbQuery = `SELECT ${valString} FROM ${tableName}`.concat(addOns);
    let res = await DButils.execQuery(dbQuery);
    return res;
}
/*this function get: 
api path and return all data
*/
async function getFromSoccerAPI(finalAPI, includes =null){//get data from soccer api, include='team, league'
    try{
        let address = `${api_domain}/${finalAPI}`;
        const data = await axios.get(address, {
            params: {
              include: includes,
              api_token: process.env.api_token,
            },
          });
        return data
    }
    catch(err){
        return false;}

}
exports.insertinto = insertinto;
exports.getFromTable = getFromTable;
exports.getFromSoccerAPI =getFromSoccerAPI;
