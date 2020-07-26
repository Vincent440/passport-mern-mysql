# M.E.R.N Passport MySQL
![GitHub stars](https://img.shields.io/github/stars/Vincent440/passport-mern-sql?style=social)
![GitHub forks](https://img.shields.io/github/forks/Vincent440/passport-mern-sql?style=social)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](../LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![David](https://img.shields.io/david/Vincent440/passport-mern-sql)
![GitHub repo size](https://img.shields.io/github/repo-size/Vincent440/passport-mern-sql)

[DEMO](https://passport-mern.Herokuapp.com/) on Heroku, the dyno may take up to 15 seconds on first reques, please be patient.

Node.js using the Express framework with a React client application using MySQL to log the user in with passport with the passport-local strategy using a username and password. Using bootstrap for basic UI with React-bootstrap

My intentions creating this repository was to learn passport, as well as create a good amount of _example code for others to help them create a successful user login system with mysql express react and node.js._
Not the Sequelize ORM that would take some modifications to setup.

## Getting Started

Currently to run the application you will need to:

* Clone the repository locally

```bash
git clone https://github.com/Vincent440/passport-mern-sql.git
```

* Create a `.env` File and store all the database connection information,
Or any other environment variables that will change depending on where the application is hosted.

Option 1

`echo` 

Update the command with your specific environment and copy and run it to create a `.env` file with the key value pairs required to run the application.

```
echo PORT=3001 >> .env && echo DB_NAME=passportmern >> .env && echo DB_HOST=localhost >> .env && echo DB_USER=root >> .env && echo DB_PORT=3306 >> .env && echo DB_PW=<your password here> >> .env && echo MY_SECRET=your-most-secret-of-secrets-here >> .env
```

Option 2

create the `.env` file 

```bash
touch .env
```

Then copy and paste the key values in and update them with your local config
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

* Using `yarn` to pull in the required packages:

```bash
yarn install
```
If you do not have `yarn` you could use `npm`, but you'd need to update the scripts in the `package.json` file to reflect the usage of `npm` instead of `yarn`.

* Run the Database schema.sql to set up the database structure.

passport-mern-sql/config/[schema.sql](../config/schema.sql)

* Run the Database seeds.sql file

passport-mern-sql/config/[seeds.sql](../config/seeds.sql)

Then you should be all set to start making changes to the application.

### Hosting the application

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

## License
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](../LICENSE)

### Contributors

Created with :heart: by [Vincent Shury](https://www.vshury.com).