# M.E.R.N Passport MySQL
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Node.js using the Express framework with a React client application using MySQL to log the user in with passport with the passport-local strategy using a username and password. 

My intentions creating this repository was to learn passport, as well as create a good amount of _example code for others to help them create a successful user login system with mysql express react and node.js._
Not the Sequelize ORM that would take some modifications to setup.

__App Heroku hosted application View here: [Passport-mern](https://passport-mern.Herokuapp.com/)__
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
DB_PW=passwordstringhere

# Secret for cookies/sessions 
MY_SECRET=your-most-secret-of-secrets-here

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

# Hosting the application.

In order to deploy this application:

you will need to ensure have a mysql database attached to your server. The way this application is set up the `.env` variables will need to match how the local database `.env` variables are set up. 

I used Heroku to deploy my application.
to do the same you will need to:
* Have a Heroku account or create one. 
* **assuming you have an account.** log in to the Heroku website.
* Create a new app and name it whatever you would like to match your applications initial Heroku url. 
* Open `your application name` from the dashboard on Heroku's website and select `Deploy`
* Select `Github` and login to Github to connect your account to Heroku
* After succesfully connecting to Github connect the app to the github repository
  * Select the Github account you are using and search for the repository using the search box provided.
  * If you searched successfully you will see the repository you are looking for and have a *Connect* button.
  * After pressing *Connect* you have the option to either select a branch and setup automatic deployments or manually deploy whenever you want to test your latest build in a branch. up to you. 
---
### Issues || Questions?
* **Question?** Open a **[Ticket here](https://github.com/Vincent440/passport-mern-sql/issues/new)**

* **Issue?** Open a **[Ticket here](https://github.com/Vincent440/passport-mern-sql/issues/new)**
  * Please leave a brief description
  * Details surrounding the problem
  * Attempts you took to fix it.
  * OS you are using.


---
## Contributers

* [Vincent Shury](https://vincent440.github.io/)