### Introduction 🌞
Hello World! I've got a pleasure to demonstrate my QuoteApp coded for my winter semester NodeJsClass exam. This app is a database of quotes. You can add, load, remove quotes etc. All functionalities are demonstrated below.

**
## Technologies and Tools 🏗
* JavaScript ES6
* Node.js + node modules(File System; NPM - lodash, yargs, axios and colors)
* Visual Studio Code
* system console

**
## Description
* do below steps in your system console: 
1. First of all, you have to clone my repo. 
2. Next, enter the cloned folder where app files are included.
3. Install node package manager modules necessary to correct work of app. Use command:
```
npm install
```
4. If you want to get to know how app command works use command:
```
node app.js help
```
![screenshot](https://github.com/KarolChilimoniuk/NodeJsClassExam/blob/master/images/helpJpg.jpg)

Above screen presents help menu. 
In this app you can 
- create new json file. *IMPORTANT - if quotes.json exists, command ``` node.app.js create ``` is gonna overwrite this file by empty file. Created quotes.json is included to this repo*
- add new quote. Command must include sentence and author. Genre isn't mandatory.
- load all, random or chosen quotes. If you'd like to find specific quote/quotes, use command with parameter. 
- load external quote (from external server).
- remove quotes.

*You can use aliases instead of whole commands. For example ``` node app.js ext``` instead of ```node app.js external```
