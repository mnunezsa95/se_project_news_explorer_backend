# se_project_news_explorer_backend

# News Explorer Application (Frontend)

## Overview

- Intro - About the project
- Description of the Project
- Technologies
- Figma Design
- Links
- Demo Credentials
- Plans for Improvement

### Intro - About the project

The frontend component of News Explorer is constructed using React.js, CSS, and JavaScript, forming the visual framework for the News Explorer Application. The frontend component is hosted in a separate repository (refer to the 'Links' section for details).

News Explorer functions as a news-article search engine, allowing users to input queries and retrieve relevant news articles (three at a time). Users can access brief article descriptions. If they have an account, they can sign up and save their favorite articles; otherwise, they can only view them.

The application is designed to be responsive on all screen sizes, starting from 250px and above. Notably, the mobile design features a distinct hamburger menu compared to the tablet and laptop designs.

### Description of the Project

This represents the backend module of the News Explorer application, crafted with Node.JS and Express.js. It functions as the central hub for user authentication, user authorization, routing, file delivery to the frontend, and error management (utilizing controller functions and middlewares). In addition, Schema models were employed to validate MongoDB-related files. Additionally, security measures, such as the helmet module and a rate limiter, have been integrated to fortify against DDoS attacks.

### Technologies Used

- Frontend: JavaScript, React.js, CSS3, AJAX
- Backend: Node.js, Express.js, Mongoose, REST API, Google Cloud
- Backend Security: Express Modules (CORS, Winston, bcrypt, rate limiting)
- Tools Used: Webpack, Postman, ESLint

### Links

- Domain (https://www.news-explorer.mooo.com): [Click here](https://www.news-explorer.mooo.com) to see the live version
- API Domain: The API domain is https://api.news-explorer.mooo.com
- Backend Code: The frontend code can be viewed [here](https://github.com/mnunezsa95/se_project_news_explorer_frontend)
- External News API: [Click here](https://newsapi.org/) to see the News API.

### Demo Credentials

Use the following credentials to test out the application

- Demo username: user1@gmail.com
- Demo password: user1

### Plans for Improvement

1. Implement a capability for users to share their saved news articles with others.
2. Introduce functionalities enabling users to modify account details such as email, password, and name.
3. Incorporate a feature enabling users to upload a profile picture or avatar.
4. Integrate a sorting feature, allowing users to arrange articles in various orders (alphabetically, by date, etc.).
5. Introduce a search feature, empowering users to fine-tune search parameters, including adding starting and ending dates.
6. Implement testing scripts to facilitate seamless scaling while ensuring the preservation of existing code functionality.
