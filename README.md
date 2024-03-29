<img src="public/images/screenshot.png" width="100%"/>

# :woman_with_probing_cane: Physio Path Website Project :computer:

## :question: What is it?

This website allows physiotherapists to assign **personalized rehabilitation programs** to their patients, which in turn can ask a connection to their favourite physiotherapists and visualize the programs they're given to.

## :books: Programming Languages

- Front end: React
- Back end: Spring

To store the data I used PostgreSQL.

## :mechanical_arm: Functionality

- Registration and login
- Physiotherapists can:
  - accept patients' link requests.
  - create new programs.
  - add exercises to programs, choosing sets and reps.
  - filter exercises by target area, difficulty level and name.
  - assign programs to patients.
  - search patients by last name.
  - remove patients from their connections.
- Patients can:
  - send link requests to physiotherapists.
  - view the assigned programs.
  - set the programs to completed or in progress.
  - purchase their favourite subscription.
  - leave reviews to physiotherapists.
  - search physiotherapists by last name and specialization.
  - filter the assignments by assignment status.
  - download the PDF of the program.
  - remove physiotherapists from their connections.
- Both type of users can:
  - change profile details.
  - upload profile picture.
  - choose between light and dark mode.
- Admin can:
  - remove physiotherapists, patients, exercises.
  - add physiotherapists, patients, exercises.
  - view statistics.

## :package: Packages

- `npm i react react-bootstrap`
- `npm i date-fns`
- `npm i framer-motion`
- `npm i html2canvas`
- `npm i js-cookie`
- `npm i jspdf`
- `npm i react-bootstrap-icons`
- `npm i react-router-dom`
- `npm i react-redux`
- `npm i react-select`
- `npm i react-simple-typewriter`
- `npm i react-spinners`
- `npm i react-toastify`
- `npm i redux-persist`
- `npm i @reduxjs/toolkit`
- `npm i @stripe/stripe-js`
- `npm i react-confetti`

## :paintbrush: CSS

The primary color is `#0e9a3d` and `#ce8013` is the secondary one. I used SASS for the whole project.

## :microscope: Do you want to test it?

Download the project, open it with an IDE (I used Visual Studio Code) and use the following commands:

- `npm install`
- `npm start`

To populate the database with the exercises simply use the file "exercises.csv" which is inside the back end repository. I suggest using Postman with a POST method to:
http://localhost:3001/uploadExercises with "picture" as key and the file exercises.csv as value.

## :cd: Back end repository

Link to backend repository
https://github.com/guimasi1/EPICODE_FINAL_PROJECT

## Author

Guido Masi
[Linkedin](https://linkedin.com/in/guido-masi-fullstack-dev)
