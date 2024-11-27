
# BACKEND-HE

This is a basic backend authentication with login ,signup,logout
with jwt

## Setup Guide
Step 1: Clone the Repository


```bash

git clone https://github.com/Aditya-Gupta171/Backend-HE.git
cd Backend-HE
npm install

```
create an .env file and place in root folder Backend-HE as mention in below diagram
```bash
JWT_SECRET=xxxxxx{give some secret key}
PORT=xxxx {give port no.}

```


Now u Have to create ur own database in firebaseDB
after creation of DB.

-create an app under it {name anything}
then,

-In the Firebase Console, go to Project Settings:

-[Click the gear icon ⚙️ in the top left, then select "Project 
Settings".

-Navigate to the Service Accounts tab.
Under Firebase Admin SDK, click "Generate New Private Key".

-Click "Generate Key". A serviceAccountKey.json file will be downloaded to your computer.


then place ur serviceAccountKey.json file as mention in the folder in root of Backend-HE.


At last ur folder structure should be like this
```
client-project/
├── Backend/
│   ├serviceAccountKey.json
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── AuthPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── App.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
└── README.md
```
Api endpoints:

{post}http://localhost:xxxx/api/register

{post}http://localhost:xxxx/api/login

{post}http://localhost:xxxx/api/logout

{get}http://localhost:xxxx/api/protected  