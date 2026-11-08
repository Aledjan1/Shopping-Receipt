const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQuantity = document.querySelector("#product-quantity");
const btnAdd = document.querySelector(".add-btn");
const itemsList = document.querySelector(".items-list");
const totalValue = document.querySelector(".total-value");
const clearBtn = document.querySelector(".clear-btn");
const emptyMessage = document.querySelector(".empty-message");
const nameError = document.querySelector("#name-error");
const priceError = document.querySelector("#price-error");
const quantityError = document.querySelector("#quantity-error");

let total = 0;

btnAdd.addEventListener("click", function() {

    const name = productName.value.trim();
    const price = Number(productPrice.value);
    const quantity = Number(productQuantity.value);
    const subtotal = price * quantity;
    let isValid = true;

    if(name === "") {
        productName.classList.add("input-error");
        nameError.textContent = "Please enter a product name.";
        isValid = false;
    } else {
        clearError(productName, nameError);
    }
    
    if(price <= 0 || Number.isNaN(price)) {
        productPrice.classList.add("input-error");
        priceError.textContent = "Please enter a valid price greater than zero.";
        isValid = false;
    } else {
      clearError(productPrice, priceError); 
    }
    
    if(quantity < 1 || !Number.isInteger(quantity)) {
        productQuantity.classList.add("input-error");
        quantityError.textContent = "Please enter a valid whole number greater than zero.";
        isValid = false;
    } else {
        clearError(productQuantity, quantityError);
    }

    if(isValid === false) {
        return;
    }

    total += subtotal;
    totalValue.textContent = `£${total.toFixed(2)}`;

    const item = document.createElement("div");
    const itemName = document.createElement("p");
    const itemDetails = document.createElement("p");
    const itemSubtotal = document.createElement("span");
    const removeBtn = document.createElement("button");

    item.classList.add("receipt-item");
    itemName.classList.add("receipt-item__name");
    itemDetails.classList.add("receipt-item__details");
    itemSubtotal.classList.add("receipt-item__subtotal");
    removeBtn.classList.add("remove-btn");

    itemsList.append(item);
    item.append(itemName);
    item.append(itemDetails);
    item.append(itemSubtotal);
    item.append(removeBtn);

    itemName.textContent = name;
    itemDetails.textContent = `£${price.toFixed(2)} * ${quantity}`;
    itemSubtotal.textContent = `£${subtotal.toFixed(2)}`;
    removeBtn.textContent = "❌";
    emptyMessage.style.display = "none";
    
    removeBtn.addEventListener("click", function() {
       item.remove();
       if(itemsList.children.length === 0) {
        emptyMessage.style.display = "block";
       } else {
        emptyMessage.style.display = "none";
       }
       total -= subtotal;
       totalValue.textContent = `£${total.toFixed(2)}`;
    });
    clearInputs();
});

productName.addEventListener("input", function() {
    if(productName.value.trim() !== "") {
        clearError(productName, nameError);
    }
});

productPrice.addEventListener("input", function() {
    const price = Number(productPrice.value);
    if(price > 0 && !Number.isNaN(price)) {
        clearError(productPrice, priceError);
    }
});

productQuantity.addEventListener("input", function() {
    const quantity = Number(productQuantity.value);
    if(quantity > 0 && Number.isInteger(quantity)) {
        clearError(productQuantity, quantityError)
    }
});

clearBtn.addEventListener("click", function() {
    itemsList.innerHTML = "";
    total = 0;
    totalValue.textContent = "£0.00";
    emptyMessage.style.display = "block";
    clearInputs();
});

function clearError(input, error) {
    input.classList.remove("input-error");
    error.textContent = "";
}

function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productQuantity.value = 1;
    productName.classList.remove("input-error");
    nameError.textContent = "";
    productPrice.classList.remove("input-error");
    priceError.textContent = "";
    productQuantity.classList.remove("input-error");
    quantityError.textContent = "";
}