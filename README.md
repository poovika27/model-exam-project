# Model Examination Project

## Project Overview

This repository contains the solutions for both questions of the model examination.

The project includes a front-end development task and a backend/database development task.

### Questions Included

- **Q1 - Student Feedback Form**
- **Q2 - Library Management System**

Both questions were implemented and tested successfully in the ByteXL environment.

---

# Technologies Used

The following technologies were used to implement the two questions:

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Q1 - Student Feedback Form

## Objective

To develop a Student Feedback Form using HTML, CSS and JavaScript with appropriate styling and client-side validation.

## Description

The Student Feedback Form allows students to enter their personal and academic details and provide a rating and feedback.

The form is designed with a simple interface and uses JavaScript to validate the entered information before displaying a successful submission message.

## Form Fields

The following fields are included in the form:

- Student Name
- Register Number
- Email
- Department
- Year
- Rating from 1 to 5
- Feedback

The form also contains:

- Submit button
- Reset button


# Q2 - Library Management System

## Objective

To develop a Library Management System using Node.js and MongoDB that allows a new book to be inserted into the database and the available copies of an existing book to be updated using its book ID.

## Description

The Library Management System is a backend application developed using Node.js and Express.js with MongoDB as the database.

The application manages basic book information such as book ID, title, author, category, price and available copies.

The application provides API operations to insert a new book and update the number of available copies of a book. Mongoose is used to connect the Node.js application with MongoDB and perform database operations.

## Book Fields

The following fields are included for each book:

- Book ID
- Title
- Author
- Category
- Price
- Available Copies

The application performs the following operations:

- Insert a new book
- Update available copies using Book ID