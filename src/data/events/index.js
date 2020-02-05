"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  //read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("events");

  const getEvents = async userId => {
    //get a connection to SQL Server
    const cnx = await getConnection();

    //reate a new request
    const request = await cnx.request();

    //configure sl query parameters
    request.input("userId", sql.VarChar(50), userId);

    //return the executed query
    return request.query(sqlQueries.getEvents);
  };

  return {
    getEvents
  };
};

module.exports = { register };
