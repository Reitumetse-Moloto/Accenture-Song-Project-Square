# Accenture-Song-Project-Square
Full Stack Developer Challenge 

***Thought Process***

## Folder Structure
I created a React app with an organized folder structure to separate key components:

Assets: Contains icons and images used throughout the project.
Components: Includes all reusable UI components, such as Brands, Cards, Header, and Footer.
Pages: Houses the main App page that renders the entire webpage.
Backend: Manages the API endpoints, database connection, and schema.

## Case Studies
I implemented a slider effect using a React library to improve the mobile view of the webpage. This was a practical choice, considering I only had three images to display.

## Brands
For data storage, I chose MongoDB due to its simplicity and easy integration with Node.js and Express. The database stores key information for each brand, including:

Name
Logo
A boolean field for the "published" status.
I initially attempted to use Multer with MongoDB to store images through a POST request and retrieve them via a GET request. However, I switched to building an API endpoint that fetches brand data and images using relative SVG paths from the database.

Additionally, I implemented a sorting function to display the brands in ascending order and allow users to reset the sorting. I also filtered the brands based on the "published" boolean value.

## Getting Started
In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To run the backend:

### `node server.js`


Project Snippets
<img width="1439" alt="Screenshot 2024-11-24 at 01 01 36" src="https://github.com/user-attachments/assets/02944946-a5ad-4c1a-8ccb-570cb0c74d93">
<img width="1439" alt="Screenshot 2024-11-24 at 01 01 43" src="https://github.com/user-attachments/assets/7245b378-03a7-4371-aeb0-803feefd3bc1">
<img width="1439" alt="Screenshot 2024-11-24 at 01 01 54" src="https://github.com/user-attachments/assets/965af304-4091-44b6-99a2-7615496583d5">


