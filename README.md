# About e-commerce bookshop App
Electronic commerce (e-commerce) is becoming more and more important in our world. In the beginning, only start-up companies tried doing online business, 
but today even the old economy has realized that e-commerce can be profitable and can make a company operate more efficiently.
# Features
The first and foremost feature is friendly UI that it make easy usage for admin and user.Additionally,The app can feel an intersting at a first glance also it is designed for convential access to products and basket. 

# Running project locally
Clone the repository: <br>
```git clone git@github.com:Lo-Agency-Internship/react-ecommerce-bookshop.git```
The App has two specific folders, Backend and Frontend.
To run Backend part of the App follow these steps after clone project:
```
cd backend
npm i
npm run start:dev
```
This application loads the variables defined in the .env file.
In order to use this application you should create .env file in the backend directory and put your secret key in this file for creating JWT token, In order to create secret key we suggest you to use crypto library of node.js.we also have .env.sample file in the backend directory to show how to define the secret key.
you should also create .env file in our frontend directory in order to define API address. <br>

In addition,open new terminal for run Frontend part:
```
cd frontend
npm i
npm run start
```
Type url into your browser:<br>
BE part ```http://localhost:3001/``` <br>
FE part ```http://localhost:3000/```

# Libraries & Tools Used
### Libraries
* JWT
* Cors
* Passport
* Sequelize-typescript
* Squelize
* Sqlite3
* Dotenv
* Axios
* Yup
* Bcrypt<br>
### Tools
* React
* Nest 
* Javascripts
* TailWind

# Found this project useful?
Let's start!!
