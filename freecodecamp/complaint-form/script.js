const name = document.getElementById("full-name");
const email = document.getElementById("email");
const order = document.getElementById("order-no");
const product = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintDescription = document.getElementById("complaint-description");
const solutionDescription = document.getElementById("solution-description");
const submitBtn = document.getElementById("submit-btn");

function isValidName(){
  const regex = /[A-Za-z]+/;
  return regex.test(name.value.trim());
}

function isValidEmail(){
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.value.trim());
}

function isValidOrder(){
  const regex = /^2024\d{6}/; 
  return regex.test(order.value.trim());
}

function isValidProductCode(){
  const regex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d$/i;
  return regex.test(product.value.trim());  
}

function isValidQuantity() {
  const value = Number(quantity.value);
  return Number.isInteger(value) && value > 0;
}

function isValidComplaintGroup(arrComplaintGroup){
  return arrComplaintGroup.length > 0;
}

function isValidComplaintDescription(arrComplaintGroup){
  const regex = /^[\w ]{20,}$/;
  for(const complaint of arrComplaintGroup){
    if(complaint.value === "other"){
      return regex.test(complaintDescription.value.trim());
    }
  }
  return true;
}

function isValidSolutionGroup(arrSolutionGroup){
  return arrSolutionGroup !== null;
}

function isValidSolutionDescription(arrSolutionGroup){
  const regex = /^[\w ]{20,}$/;

  if(arrSolutionGroup?.value === "other"){
    return regex.test(solutionDescription.value.trim());
  }

  return true;
}

function validateForm(){
  const complaints = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked');
  const solution = document.querySelector('#solutions-group input[name="solutions"]:checked');

  let objVal = {'full-name':isValidName(), 'email': isValidEmail(), 'order-no': isValidOrder(), 'product-code':isValidProductCode(), 'quantity':isValidQuantity(), 'complaints-group': isValidComplaintGroup(complaints), 'complaint-description': isValidComplaintDescription(complaints), 'solutions-group':isValidSolutionGroup(solution), 'solution-description': isValidSolutionDescription(solution)};

  return objVal;
}

function isValid(objValidate){
  for(const item in objValidate){
    if(!objValidate[item]){
      return false;
    }
  }
  return true;
}

function updateFieldBorder(field, isFieldValid){
  field.style.borderColor = isFieldValid ? "green" : "red";
}

const form = document.getElementById("form");

form.addEventListener("change", (e) => {
  const validations = validateForm();

  let field;
  let isFieldValid;

  if (e.target.type === "checkbox") {
    field = e.target.closest("fieldset");
    isFieldValid = validations["complaints-group"];

  } else if (e.target.type === "radio") {
    field = e.target.closest("fieldset");
    isFieldValid = validations["solutions-group"];

  } else {
    field = e.target;
    isFieldValid = validations[e.target.id];
  }

  updateFieldBorder(field, isFieldValid);
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validations = validateForm();

  if (isValid(validations)) {

    console.log("Formulario válido");
  } else {

    console.log("Formulario inválido");

    for (const field in validations) {
      if (!validations[field]) {
        switch (field) {
          case "full-name":
            updateFieldBorder(name, false);
            break;

          case "email":
            updateFieldBorder(email, false);
            break;

          case "order-no":
            updateFieldBorder(order, false);
            break;

          case "product-code":
            updateFieldBorder(product, false);
            break;

          case "quantity":
            updateFieldBorder(quantity, false);
            break;

          case "complaints-group":
            updateFieldBorder(
              document.getElementById("complaints-group"),
              false
            );
            break;

          case "complaint-description":
            updateFieldBorder(complaintDescription, false);
            break;

          case "solutions-group":
            updateFieldBorder(
              document.getElementById("solutions-group"),
              false
            );
            break;

          case "solution-description":
            updateFieldBorder(solutionDescription, false);
            break;
        }
      }
    }
  }
});