# Objective
Create a simple script to scrape Amazon product listings from the first page of search results for a given keyword.

# Task Requirements

- Backend/API (Node.js):
Set up a Node.js project with the necessary dependencies (express, axios and JSDOM).
- Write a script using axios to fetch the contents of the Quotes to Scrape search results page for a given keyword.
- Use JSDOM to parse the HTML content and extract the following details for each product listing on the first page:
    - Quote text
    - Author
    - Tags
- Create an endpoint /api/scrape and returns the extracted data in JSON format.
- Frontend (HTML, CSS, Vanilla JavaScript):
Develop a simple webpage:
    Style the webpage to be user-friendly and presentable.

# Documentation

Provide comments within your code to offer clarity on your logic and process.
Include a README.md file with the setup and running instructions
Considerations:

Ensure you handle errors gracefully both on the backend and frontend.
Provide clear instructions on how to run the application.
The cleaner and more functional the code is, the better.

# Amazon Product Organization

- Quotes
    - (.quote)
- Quote text
    - (.text)
- Author
    - (.author)
- Tags
    - (.tag)