# ABOUT THE AUTHOR
### 1. Name:
    Nhat Nguyen Nguyen
### 2. Role:
    Senior Frontend Engineer
### 3. Contact information
> - Email: `nhatnguyen.nguyen23@gmail.com`
>
> - Mobile: `+84973019286`

# INTRODUCTION
## 1. Requirement
> ### 1.1. Key Features
> **FE applicants should accomplish the first 3 features. While BE and Fullstack applicants must complete features 4.**
>> - `User registration and login`
>
>> - `Sharing YouTube videos`
>
>> - `Viewing a list of shared videos (no need to display up/down votes)
     Real-time notifications for new video shares: When a user shares a new video, other logged-in users should receive a real-time notification about the newly shared video. This notification can be displayed as a pop-up or a banner in the application, and it should contain the video title and the name of the user who shared it.`
> ### 1.2. Instructions
>> - `Develop a simple UI to demonstrate your backend functionality.`
>
>> - `Implement the real-time notifications feature using WebSockets and background jobs.`
>
>> - `Create a detailed README.md file with clear instructions for setting up the project on the reviewer's machine (see below for details).`
>
>> - `Deploy the application and include the link to the site when submitting the project.
     Plus point for full Docker configuration to run locally.`
>
>> - `Submit the links to https://remi.group/project-for-renec-developer-submission`
> ### 1.3. Technical Requirements
>> - `Use Git with frequent commits`
>
>> - `If you’re applying for the FS/FE developer position, use React for frontend is a must.`
>
>> - `For FE applicants: must use Typescript/React and use responsive design for the frontend.`
>
>> - `Include unit tests`
>
>> - `Include unit tests (again)`
>
>> - `Include integration test`

## 2. Tech stack
> ### 2.1. Backend
> - Language: `Javascript / Node JS (v18.8.0)`
> - Framework: `Express.js`
> - Database: `Firestore`
> ### 2.2. Frontend
> - Language: `Typescript & Javascript`
> - Framework: `Next JS (v13.5.3)` (React JS)
> - UI Lib: `Ant Design (v5.9.4)` (https://ant.design)
> ### 2.3. Third-party API libraries:
> - `YouTube API (v3)` (https://developers.google.com/youtube/v3)
> ### 2.4. Testing library
> - `Cypress (v13.3.0)` (e2e)
> - `Jest (v29.7.0)` (Unit test)
> ### 2.5. Deployment platform
> - `Vercel` (https://vercel.com/)

## 3. Tools
> - IDE: `Jetbrains Webstorm (v2022.2.1)`
> - Browser: `Google Chrome`

## 4. Source code
### 4.1. **Repository**:
`https://github.com/nnnguyen2314/remitano-renec-dev-test.git`
> Frontend: `https://github.com/nnnguyen2314/remitano-renec-dev-test/tree/master/frontend-next`
>
> Backend: `https://github.com/nnnguyen2314/remitano-renec-dev-test/tree/master/backend`
### 4.2. **Branch**:
> - `main`

# Getting Started
## 1. Demo
> - https://remitano-renec-dev-test-5ohq.vercel.app
## 2. Installation, Configuration & Running
> ### 2.1. Installation
>> 2.1.1. General
> >> - Create a Git repository with 2 folders `Backend` and `Frontend`
> >> - Checkout to local machine
>
>> 2.1.2. Backend
> >> - Init Express project for Backend: `npm init` -> `npm install express`
> >> - Run `yarn install` to install dependencies
> 
>> 2.1.3. Frontend
> >> - Init Next js with Typescript for Frontend: `npx create-next-app@latest` -> choose `yes`
> >> ```bash
> >>  - What is your project named?  my-app
> >>  - Would you like to use TypeScript?  No / Yes => choose `Yes`
> >>  - Would you like to use ESLint?  No / Yes
> >>  - Would you like to use Tailwind CSS?  No / Yes
> >>  - Would you like to use `src/` directory?  No / Yes
> >>  - Would you like to use App Router? (recommended)  No / Yes
> >>  - Would you like to customize the default import alias (@/*)?  No / Yes
> >> ```
> >> - Run `yarn install` to install dependencies
> ### 2.2. Configuration
>> 2.2.1. Backend
> >> - 
>
>> 2.2.2. Frontend
> >> - Add file `.env` to define Environment Variables: run `touch .env` 
> >> - Add this variable to call API locally: `APP_API_URL=http://localhost:3100`

> ### 2.3. Build locally & Running
>> 2.3.1. Backend
```bash
npm run start
# or
yarn start
```
>> 2.3.2. Frontend
```bash
npm run dev
# or
yarn dev
```
## 3. Deployment
