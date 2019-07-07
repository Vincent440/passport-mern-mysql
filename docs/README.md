# M.E.R.N Passport MySQL

React app with a node express server to log the user in using passport connected to mysql database

When I have time I will add more comments to the code along with post this repo as an example for future Passport, passport-local, React app developers. 

__App heroku hosted application View here: [Passport-mern](https://passport-mern.herokuapp.com/)__
---

### Getting Started

Currently to run the application you will need to:

 * Clone the repository locally
```bash
git clone https://github.com/Vincent440/passport-mern-sql.git
```

* Create a `.env` File and store all the database connection information,
Or any other environment variables that will change depending on where the application is hosted. 
```env

# Port to host application on.
PORT=3001

# Name of the mysql database you will be connecting to.
DB_NAME=mernpassportexample

# Host name for connecting to MySQL database
DB_HOST=hostname

#Port to connect to MySQL database
DB_PORT=3306

# User for connecting to MySQL database
DB_USER=userstringhere

# Password for connecting to MySQL database
DB_PASSWORD=passwordstringhere

```

* Run npm install commands to pull in the required packages:
```bash
npm install
```

* Run the Database schema.sql to set up the database structure.

passport-mern-sql/config/[schema.sql](../config/schema.sql)

* Run the Database seeds.sql file

passport-mern-sql/config/[seeds.sql](../config/seeds.sql)

Then you should be all set to start making changes to the application. 

---
## Contributers
---
* [Vincent Shury](https://vincent440.github.io/)