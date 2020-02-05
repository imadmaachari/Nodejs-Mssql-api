- set up a good project structure to support app as it grows .

package.json
client
src
| data
| plugins
| routes
| views
test

- Manage Nodejs Application Configuration
- managing env vars can be a pain . Sol => dotenv
- Add route to Hapi to query the database .
- Organize the data access layer

- Use of Pooling :
  When a query request is created . the SQL client use the next available connection in the pool .
  After the query is executed . the connection is returned to the connection of the pool .

* getCon nection : returns the active connection pool or create it if necessary .
* closePool : makes sure the previouslt active pool is disposed .
* Although it’s possible to embed SQL queries as strings in JavaScript code, I believe it’s better to keep the queries in separate .sql files and load them at startup. This utils module loads all the .sql files in a given folder and returns them as a single object.

-DB Plugin : make running Sql queries easy from other parts of the app .[middleware . but in hapi we use the term plugin].
