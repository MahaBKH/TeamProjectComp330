# SE Team 4: Project 2
## Goal
The result of this project is a web application that implements a user friendly interface using Twitter colors that allows for user interaction. 

## Run and Build Instructions
Please follow the setps below to ensure this web application runs as needed:
 * Clone repo into Visual Studio Code
 * Open terminal and make sure you are in the local project directory and issue the command 'npm install' 
 * Issue the command "npm start' to start the server
 * Go to the index.html file and run in browser, preferably Google Chrome

## Features
### Web Application using Bulma
We created our main interface using HTML and Bulma which is CSS Framework. We included a welcome page that give you the option of logging and signing up. The login button leads to the login page and the sign up button leads to the sign-up page.

### Login Verification
We implemented login verification as one of the main features. The login verification on the login page does not allow that user to move past that page if either field (username or password) is left empty. It creates an alert box that prompts the user to make sure no field is left empty. Once the requirements are met, they can move on to the Feed page. At the end of the log-in page ther is als the option for the user to switch over to the sign-in page. Login verification is also implemented on the sing up page which requires users to input a username, password, and password confirmation. The following criterias must be met by the users: 
  * Username field cannot be left blank  
  * Password must contain at least one number  
  * Password must contain at least one uppercase letter  
  * The inputs in the Password and Confirm password field must pass    
  
These requirements must be met in order to move on the Feed page, otherwise and error notification box pops up to nitify the user of what requirement they still need to meet (i.e. if the user is missing a number in the password, an error box with the follwong error will pop-up: "Error: password must contain at least one number (0-9).").  

### Class Lecture Aspect
We utilized Scrum methodology as discussed in the lecture videos. We used "sprints" as one of our main methods of meetings and work. It allowed for us as a bigger team to be more effective whether it was in person or over Zoom call. We used Basecamp actively to schedule our meeting and to-dos, upload notes, adn create benchmarks to meet in each meeting/worrk session.

## Reflections
This project has been accompanied with many ups and downs and fixes. Through the process we learned many lessons about proper GitHub merging, project configurations, dependencies, team communication. We also learned the importance of contiued communication in order to ennd with a coherent project.
