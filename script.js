
// ==================================
// 1. EXPENSE ARRAY
// ==================================

let expenses = [
    {
        id: 1,
        name: "Lunch",
        amount: 20,
        category: "Food"
    },
    {
        id: 2,
        name: "Bus Fare",
        amount: 10,
        category: "Transport"
    },
    {
        id: 3,
        name: "Shopping",
        amount: 50,
        category: "Shopping"
    }
];

let monthlyBudget = 3000;


// ==================================
// 2. SELECT HTML ELEMENTS
// ==================================

const expenseForm = document.getElementById("expenseForm");

const budgetForm = document.getElementById("budgetForm");

const expenseList = document.getElementById("expenseList");

const totalExpensesDisplay = document.getElementById("totalExpenses");

const remainingBalanceDisplay = document.getElementById("remainingBalance");

const budgetAmountDisplay = document.getElementById("budgetAmount");

const budgetStatus = document.getElementById("budgetStatus");

const categoryGrid = document.getElementById("categoryGrid");

const emptyMessage = document.getElementById("emptyMessage");


// ==================================
// 3. CALCULATE TOTAL EXPENSES
// ==================================

function calculateTotal() {

    let total = 0;

    expenses.forEach(function(expense) {

        total += expense.amount;

    });

    return total;
}


// ==================================
// 4. UPDATE DASHBOARD
// ==================================

function updateDashboard() {

    let total = calculateTotal();

    let remaining = monthlyBudget - total;

    totalExpensesDisplay.textContent = "$" + total.toFixed(2);

    remainingBalanceDisplay.textContent = "$" + remaining.toFixed(2);

    budgetAmountDisplay.textContent = "$" + monthlyBudget.toFixed(2);


    // Conditional statements

    if (total > monthlyBudget) {

        budgetStatus.textContent = "Warning! You have exceeded your budget.";

        budgetStatus.className = "budget-status danger";

    } else if (total >= monthlyBudget * 0.8) {

        budgetStatus.textContent = "Careful! You have used 80% or more of your budget.";

        budgetStatus.className = "budget-status warning";

    } else {

        budgetStatus.textContent = "Your budget is healthy. Keep saving!";

        budgetStatus.className = "budget-status";

    }


    // Update progress bar

    let percentage = (total / monthlyBudget) * 100;

    let progress = Math.min(percentage, 100);

    document.getElementById("budgetProgress").style.width = progress + "%";

    document.getElementById("progressText").textContent =
        percentage.toFixed(1) + "% of budget used";


    // Update category cards

    displayCategories();

}


// ==================================
// 5. DISPLAY EXPENSES
// ==================================

function displayExpenses() {

    expenseList.innerHTML = "";

    // Check if there are expenses

    if (expenses.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    // Loop through the array

    expenses.forEach(function(expense) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(expense.name)}</td>
            <td>${escapeHTML(expense.category)}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>
                <button
                    class="delete-btn"
                    data-id="${expense.id}"
                    type="button"
                >
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);

    });

}


// ==================================
// 6. DISPLAY CATEGORY INFORMATION
// ==================================

function displayCategories() {

    let categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Savings",
        "Utilities",
        "Shopping"
    ];

    categoryGrid.innerHTML = "";

    categories.forEach(function(category) {

        let categoryTotal = 0;

        expenses.forEach(function(expense) {

            if (expense.category === category) {

                categoryTotal += expense.amount;

            }

        });

        let card = document.createElement("div");

        card.className = "category-card";

        card.innerHTML = `
            <h3>${category}</h3>
            <p>Total spending</p>
            <strong>$${categoryTotal.toFixed(2)}</strong>
        `;

        categoryGrid.appendChild(card);

    });

}


// ==================================
// 7. ADD NEW EXPENSE
// ==================================

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("expenseName").value.trim();

    const amount = Number(document.getElementById("expenseAmount").value);

    const category = document.getElementById("expenseCategory").value;


    // Validate user input

    if (name === "" || category === "" || !Number.isFinite(amount) || amount <= 0) {

        alert("Please enter valid expense details.");

        return;

    }


    // Create new expense object

    let newExpense = {

        id: Date.now(),

        name: name,

        amount: amount,

        category: category

    };


    // Add expense to array

    expenses.push(newExpense);


    // Update the webpage

    displayExpenses();

    updateDashboard();


    // Clear the form

    expenseForm.reset();

    alert("Expense added successfully!");

});


// ==================================
// 8. DELETE EXPENSE
// ==================================

expenseList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        let expenseId = Number(event.target.dataset.id);

        expenses = expenses.filter(function(expense) {

            return expense.id !== expenseId;

        });

        displayExpenses();

        updateDashboard();

    }

});


// ==================================
// 9. UPDATE MONTHLY BUDGET
// ==================================

budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let newBudget = Number(document.getElementById("newBudget").value);

    if (!Number.isFinite(newBudget) || newBudget <= 0) {

        alert("Please enter a valid budget.");

        return;

    }

    monthlyBudget = newBudget;

    updateDashboard();

    budgetForm.reset();

    alert("Budget updated successfully!");

});


// ==================================
// 10. SAFELY DISPLAY USER TEXT
// ==================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function(character) {

        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return characters[character];

    });

}


// ==================================
// 11. INITIAL DISPLAY
// ==================================

displayExpenses();

updateDashboard();

console.log("SpendWise JavaScript is working!");
