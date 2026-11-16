
# SpendWise - Interactive Budgeting Application

## Project Description

SpendWise is a budgeting application that helps users manage their expenses, monitor spending, and track their monthly budgets.

This project was upgraded using JavaScript to make the dashboard interactive.

## Improvements Made This Week

- Added functionality to record new expenses.
- Added the ability to delete expenses.
- Added monthly budget management.
- Added automatic expense calculations.
- Added spending categories.
- Added budget progress tracking.
- Added budget warnings.

## JavaScript Concepts Used

### 1. Conditional Statements

Used if, else if, and else statements to check spending situations.

The application warns users when they exceed their budget or use 80% of their budget.

### 2. Arrays

An expenses array stores multiple expense records.

Each record contains:
- Expense ID
- Expense name
- Amount
- Category

### 3. Loops

The forEach() method processes expense records and calculates total spending.

It also displays expenses and category information.

### 4. DOM Manipulation

JavaScript uses getElementById(), createElement(), appendChild(), and textContent to update the webpage dynamically.

### 5. Event Listeners

addEventListener() handles:
- Expense form submissions.
- Delete button clicks.
- Budget form submissions.

### 6. Functions

Functions are used to calculate totals, display expenses, update the dashboard, and display spending categories.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Structure

SpendWise/
- index.html
- style.css
- script.js
- README.md

## Challenges and Solutions

### Challenge 1: Calculating Expenses

Solution: Used arrays and forEach() to calculate total expenses automatically.

### Challenge 2: Updating the Dashboard

Solution: Used DOM manipulation to display updated information.

### Challenge 3: Budget Management

Solution: Used conditional statements to check spending and provide budget warnings.

### Challenge 4: Handling User Actions

Solution: Used event listeners to handle form submissions and delete actions.

## How to Run the Project

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Open index.html in a browser.
4. Add expenses and test the application.

## Author

Camar Hussein
