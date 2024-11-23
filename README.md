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