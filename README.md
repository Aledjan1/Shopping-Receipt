## Shopping Receipt 🛒

A simple and interactive shopping receipt application built with HTML, CSS, and JavaScript.

This project allows users to add product, calculate their costs, remove idividual items, and manage a shopping receipt.

My project link: https://aledjan1.github.io/Shopping-Receipt/

## Features

- Add product with a name, price, and quantity.
- Automatically calculate the subtotal for each product.
- Display the total cost of all products.
- Remove individual products and update the total.
- Clear the entire receipt.
- Validate error messages below invalid input fields. 
- Display error messages below invalid input fields.
- Highlight invalid fields with red borders.
- Remove error messages when users correct their input.
- Reset input fields after adding a product or clearing the receipt.
- Display a message when the receipt is empty.

## Technologies Used

- HTML5 - Application structure.
- CSS3 - Styling and error hoghlighting.
- JavaScript(E6) - DOM manipulation, event handing, calculation, and form validation.

## Challenges & Solution 

1. Form Validation

One of the biggest challenges was implementing form validation. 

Initially, I used JavaScript `alert()` messages to notify users about invalid input. Hoever, I realised that this approach was not user-friendly because it did not clearly highlight which fields needed to be corrected.

I improved the validation by displaying error messages directly below the relavant input fields and highlight them with red borders.

I also learned how to use a `Boolean variable (isValid)` to check multiple fields before allowing a product to added.

2. Managing the Total Price

Another challenge was keeping the total price accurate when adding and removing products.

I solved this by calculating a subtotal for each product and updating the overall total whenever an item was added or removed.

3. Understanding Function and Parameters

I found it challenging to understand how function parametrs work and how the same function can be refused with different arguments.

To improve my code, I created a reusable `clearError(input, error)` function that removes validation errors from different input fields.

This helped me understamd how function can reduce duplicated logic.

## What I Learned 

Through this project, I improved my understanding of: 

- Selecting and manipulating DOM elements.
- Creating HTML elements dynamically with JavaScript.
- Working with event listeners (`click` and `input`).
- Using conditional statments and logical operators. 
- Understanding return and function execution.
- Working with function parametrs and arguments.
- Validating user input.
- Using `classList.add()` and `classList.remove()`.
- Performing calculations and formatting prices with `to.Fixed(2)`.
- Writing resuable functions and reducing duplicated code.

