# F1 Database Web Application

A Firebase PaaS application where users can CRUD and view data of Formula 1 drivers and teams. 

# Features

- Login and logout using Firebase Authentication
- Create, edit, and delete F1 drivers and teams
- Search drivers and teams using dynamic filters
- Compare two drivers or two teams side by side
- Logged-out users can view/query; only logged-in users can edit
- Clean UI with dropdowns, forms, and result tables

# Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend (PaaS): Firebase Firestore & Firebase Authentication
- Hosting: Local / Firebase Hosting (optional)
- Version Control: Git

# Folder Structure

f1-database-app/
├── index.html  
├── firebase-config.js  
├── firebase-login.js  
├── add-driver.html  
├── add-team.html  
├── view-drivers.html  
├── view-teams.html  
├── edit-delete-drivers.html  
├── edit-delete-teams.html
├── compare-drivers.html
├── compare-teams.html
├──.git/
└── README.md

# Functionality Breakdown

# Authentication

- Done using firebase-login.js
- Only authenticated users can add/edit/delete data
- View and compare can be done by all users

# Drivers

- Add drivers using add-driver.html
- Fields: name, age, pole positions, wins, points, world titles, fastest laps, team
- Edit/Delete in edit-delete-drivers.html
- Filter in view-drivers.html
- Compare in compare-drivers.html

# Teams

- Add teams using add-team.html
- Fields: name, year established, pole positions, victories, constructor titles, position last season
- Edit/Delete in edit-delete-teams.html
- Filter in view-teams.html
- Compare in compare-teams.html

# Comparisons

- Highlight better statistics:
  - Lower is better: age (drivers), year established and position last season (teams)
  - Higher is better: all other statistics

# Firestore Security Rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /drivers/{doc=**}
allow read;
      allow write: if request.auth!= null;
    }
    match /teams/{doc=**} {
      allow read;
      allow write: if request.auth!= null;
    }
  }
}

# Limitations

- No traditional Python backend used (Firebase handles all backend operations using SDK)
- No external JS libraries used — just Firebase SDK



# Author


