# E-commerce Back End - Tijerina

GitHub Link: https://github.com/Chris-Tijerina/e-commerce-backend-ctijerina

Walkthrough Video: https://watch.screencastify.com/v/vo76jQBHaBOnqvOtI9Lt

## Description

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites. This repository represents the back end for an e-commerce site. where a working Express.js API is configured to Sequelize to interact with a MySQL database.

> This is a fairly straightforward set of code that utilizes many of the Sequelize methods to accomplish would could probably be done purely with SQL. Populating the database with the schema and Javascript seeds was simple enough. The development of the models was standard and the routes themselves were simple enough to figure out. I decided not to use any `Individual Hooks` in the routes, as an ecommerce site would likely have thousands of database entries and they would all have to be commited to memory and could cause massive perfomance issues. On the other hand I did happen to use an ` include: {all: true}` in the routes, which may seem counter to the idea of performance, but it was within the scope of what each call was meant for, so I found it to be the proper course of action.

## Instruction

> In order to use this application you will have to download the repository, or fork it and clone it, and open it up in your chosen terminal (Vs.Code, GitBash, Terminal for Mac, etc.). It will require that you have mySQL installed and have access to a user account with access to databases (these will be placed into a .env file. Check out the documentation on Dotenv to see how to set it up). Then you will have to ensure that node package manager(NPM) has been installed (using "npm install" in the terminal) and you'll have to be sure that Sequelize and Dotenv are installed alongside NPM.. you will also need to install console.table(npm install console.table --save) to properly display the information. Most importantly you will need to change the username and password in the `const connection` to whatever your username and password for your mySQL is. Once you've got all the dependencies installed, you can use the terminal to log into mySQL and run the ` source db/schema.sql` command to create the database, before exiting the mySQL and using the terminal to run `node seeds/index.js` to create and populate the newly created database. If you are not planning on attaching this to a front end and deploying it, you will need to use a site like Insomnia to test the API routes. If you do use Insomnia, the video attached at the top shows what will occur. Good luck!

## Licenses

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Contributing

If you would like to contribute:

> Fork the repo and create your branch from master. If you've added code that should be tested, add tests. If you've changed APIs, update the documentation. Ensure the test suite passes. Make sure your code lints and report any bugs by opening a new issue.

## Questions

> If you have any questions contact me at ctijerina@live.com or through my Github Link: https://github.com/Chris-Tijerina
