# Web Scrape with Node.Js
A simple script to scrape the first page of Quotes to Scrape website.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge 

Set up a Node.js project with the necessary dependencies (express, axios and JSDOM).
- Write a script using axios to fetch the contents of the Quotes to Scrape first page.
- Use JSDOM to parse the HTML content and extract the following details for each product listing on the first page:
    - Quote text
    - Author
    - Tags
- Create an endpoint /api/scrape and returns the extracted data in JSON format.
Develop a simple webpage:
    Style the webpage to be user-friendly and presentable.

Ensure to handle errors gracefully both on the backend and frontend.
The cleaner and more functional the code is, the better.

#### Quotes to Scrape Elements

- Quotes
    - (.quote)
- Quote text
    - (.text)
- Author
    - (.author)
- Tags
    - (.tag)

## Non-functional Requirements

- Backend (Node.Js v20.11.1)
    - Typescript
    - Axios
    - Express
    - JSDOM

### Links
- [Project code](https://github.com/nicolsam/web-scrape-node)

## Author

- Linkedin - [@nicolveras](https://www.linkedin.com/in/nicolas-samuel-veras/)
