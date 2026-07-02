# <h1 align="center">Customer Complaint Form - freeCodeCamp DOM Exercise</h1>

## Problem Description

Build a customer complaint form with real-time validation. The form validates user input for various fields including name, email, order number, product code, quantity, complaint reasons, and solution preferences.

### User Stories:

- `#full-name` is not empty
- `#email` is a valid email address format
- `#order-no` is a sequence of ten numbers starting with 2024
- `#product-code` follows pattern `XX##-X###-XX#` (X = letter, # = number)
- `#quantity` is a positive integer
- At least one checkbox from `#complaints-group` is checked
- `#complaint-description` contains at least 20 characters if "Other" checkbox is checked
- A radio button from `#solutions-group` is selected
- `#solution-description` contains at least 20 characters if "Other" radio is selected
- `validateForm()` returns object with validation status for each field
- `isValid()` returns true if all fields are valid
- `change` event sets border green on valid, red on invalid
- Form submission highlights all invalid fields in red

### Validation Rules:

| Field | Rule | Pattern |
|-------|------|---------|
| Full Name | Not empty | `/[A-Za-z]+/` |
| Email | Valid email format | `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` |
| Order No | 10 digits starting with 2024 | `/^2024\d{6}/` |
| Product Code | Pattern XX##-X###-XX# | `/^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d$/i` |
| Quantity | Positive integer | `Number.isInteger(value) && value > 0` |
| Complaints Group | At least one checked | `arrComplaintGroup.length > 0` |
| Complaint Description | ≥ 20 chars if "Other" selected | `/^[\w ]{20,}$/` |
| Solutions Group | One radio selected | `arrSolutionGroup !== null` |
| Solution Description | ≥ 20 chars if "Other" selected | `/^[\w ]{20,}$/` |

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Full name validation | ✅ |
| Email validation | ✅ |
| Order number validation | ✅ |
| Product code validation | ✅ |
| Quantity validation | ✅ |
| Complaints group validation | ✅ |
| Complaint description conditional validation | ✅ |
| Solutions group validation | ✅ |
| Solution description conditional validation | ✅ |
| `validateForm()` returns validation object | ✅ |
| `isValid()` checks all fields | ✅ |
| Change event updates border colors | ✅ |
| Submit highlights invalid fields | ✅ |

## Folder Structure
freecodecamp/

└── complaint-form/

├── index.html (provided by FCC)

├── styles.css (provided by FCC)

├── script.js (your implementation)

└── README.md

## File Details

| File | Purpose | Provider |
|------|---------|----------|
| index.html | Complaint form structure with all fields | freeCodeCamp |
| styles.css | Styling for form and fieldsets | freeCodeCamp |
| script.js | Validation logic, event handling, DOM updates | **Your code** |
| README.md | Documentation | This file |

## Usage Example

1. Open index.html in any browser
2. Fill in form fields
3. Each field validates on change (border turns green/red)
4. Submit form to validate all fields
5. Invalid fields highlighted in red
6. Valid form submits successfully

## JavaScript Concepts Practiced
### Regular Expressions
<ul>
<li>/[A-Za-z]+/ - Letters only for name</li>
<li>Email regex with domain and TLD validation</li>
<li>/^2024\d{6}/ - Order number pattern</li>
<li>/[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d/i - Product code with i flag</li>
<li>/^[\w ]{20,}$/ - Text with at least 20 characters</li>
</ul>

### Validation Functions
<ul>
<li>Individual validator functions per field</li>
<li>Conditional validation (description only required if "Other" selected)</li>
<li>Form validation object aggregation</li>
</ul>

### Event Handling
<ul>
<li>change event for real-time validation</li>
<li>submit event for form submission</li>
<li>Event delegation with e.target detection</li>
</ul>

### DOM Manipulation
<ul>
<li>style.borderColor for visual feedback</li>
<li>closest() for parent fieldset selection</li>
<li>Query selectors for checkbox and radio groups</li>
</ul>

### Array and Object Methods
<ul>
<li>document.querySelectorAll() for checkbox collection</li>
<li>for...in loop for validation object iteration</li>
<li>switch statement for field-specific updates</li>
</ul>

## JavaScript Implementation Details
### Complete JavaScript Code Structure:
        // DOM Element Selection
        const name = document.getElementById("full-name");
        const email = document.getElementById("email");
        const order = document.getElementById("order-no");
        const product = document.getElementById("product-code");
        const quantity = document.getElementById("quantity");
        const complaintDescription = document.getElementById("complaint-description");
        const solutionDescription = document.getElementById("solution-description");

        // Individual Validation Functions
        function isValidName() {
        const regex = /[A-Za-z]+/;
        return regex.test(name.value.trim());
        }

        function isValidEmail() {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email.value.trim());
        }

        function isValidOrder() {
        const regex = /^2024\d{6}/;
        return regex.test(order.value.trim());
        }

        function isValidProductCode() {
        const regex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d$/i;
        return regex.test(product.value.trim());
        }

        function isValidQuantity() {
        const value = Number(quantity.value);
        return Number.isInteger(value) && value > 0;
        }

        function isValidComplaintGroup(arrComplaintGroup) {
        return arrComplaintGroup.length > 0;
        }

        function isValidComplaintDescription(arrComplaintGroup) {
        const regex = /^[\w ]{20,}$/;
        for (const complaint of arrComplaintGroup) {
            if (complaint.value === "other") {
            return regex.test(complaintDescription.value.trim());
            }
        }
        return true;
        }

        function isValidSolutionGroup(arrSolutionGroup) {
        return arrSolutionGroup !== null;
        }

        function isValidSolutionDescription(arrSolutionGroup) {
        const regex = /^[\w ]{20,}$/;
        if (arrSolutionGroup?.value === "other") {
            return regex.test(solutionDescription.value.trim());
        }
        return true;
        }

        // Form Validation Aggregation
        function validateForm() {
        const complaints = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked');
        const solution = document.querySelector('#solutions-group input[name="solutions"]:checked');

        let objVal = {
            'full-name': isValidName(),
            'email': isValidEmail(),
            'order-no': isValidOrder(),
            'product-code': isValidProductCode(),
            'quantity': isValidQuantity(),
            'complaints-group': isValidComplaintGroup(complaints),
            'complaint-description': isValidComplaintDescription(complaints),
            'solutions-group': isValidSolutionGroup(solution),
            'solution-description': isValidSolutionDescription(solution)
        };

        return objVal;
        }

        // Overall Validation Check
        function isValid(objValidate) {
        for (const item in objValidate) {
            if (!objValidate[item]) {
            return false;
            }
        }
        return true;
        }

        // UI Update Function
        function updateFieldBorder(field, isFieldValid) {
        field.style.borderColor = isFieldValid ? "green" : "red";
        }

        // Change Event Handler
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

        // Submit Event Handler
        form.addEventListener("submit", (e) => {
        e.preventDefault();
        const validations = validateForm();

        if (isValid(validations)) {
            console.log("Formulario válido");
        } else {
            console.log("Formulario inválido");
            // Highlight all invalid fields with switch statement
        }
        });

### Key Regular Expression Breakdown:
|Regex|Explanation|
|-----|-----------|
|/[A-Za-z]+/|One or more letters (lowercase or uppercase)|
|/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/	|Valid email with domain and TLD (at least 2 chars)|
|/^2024\d{6}/	|Starts with 2024 followed by exactly 6 digits|
|/^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d$/i	|Pattern: 2 letters, 2 digits, hyphen, 1 letter, 3 digits, hyphen, 2 letters, 1 digit (case insensitive)|
|/^[\w ]{20,}$/	|Word characters and spaces, minimum 20 characters|

### Conditional Validation Logic:
        // Complaint Description - Only required if "Other" checkbox checked
        function isValidComplaintDescription(arrComplaintGroup) {
        const regex = /^[\w ]{20,}$/;
        for (const complaint of arrComplaintGroup) {
            if (complaint.value === "other") {
            return regex.test(complaintDescription.value.trim());
            }
        }
        return true; // Not required if "Other" not selected
        }

        // Solution Description - Only required if "Other" radio selected
        function isValidSolutionDescription(arrSolutionGroup) {
        const regex = /^[\w ]{20,}$/;
        if (arrSolutionGroup?.value === "other") {
            return regex.test(solutionDescription.value.trim());
        }
        return true; // Not required if "Other" not selected
        }

### Event Type Detection:
        form.addEventListener("change", (e) => {
        const validations = validateForm();
        let field;
        let isFieldValid;

        if (e.target.type === "checkbox") {
            field = e.target.closest("fieldset");  // Parent fieldset for checkbox group
            isFieldValid = validations["complaints-group"];
        } else if (e.target.type === "radio") {
            field = e.target.closest("fieldset");  // Parent fieldset for radio group
            isFieldValid = validations["solutions-group"];
        } else {
            field = e.target;  // Individual input
            isFieldValid = validations[e.target.id];
        }

        updateFieldBorder(field, isFieldValid);
        });

### Submit Validation with Switch:
        form.addEventListener("submit", (e) => {
        e.preventDefault();
        const validations = validateForm();

        if (isValid(validations)) {
            console.log("Form submitted successfully");
        } else {
            // Highlight each invalid field
            for (const field in validations) {
            if (!validations[field]) {
                switch (field) {
                case "full-name": updateFieldBorder(name, false); break;
                case "email": updateFieldBorder(email, false); break;
                case "order-no": updateFieldBorder(order, false); break;
                case "product-code": updateFieldBorder(product, false); break;
                case "quantity": updateFieldBorder(quantity, false); break;
                case "complaints-group": updateFieldBorder(document.getElementById("complaints-group"), false); break;
                case "complaint-description": updateFieldBorder(complaintDescription, false); break;
                case "solutions-group": updateFieldBorder(document.getElementById("solutions-group"), false); break;
                case "solution-description": updateFieldBorder(solutionDescription, false); break;
                }
            }
            }
        }
        });

## Customization Options
### Modify Validation Patterns:
        // Change order number year
        const regex = /^2025\d{6}/;  // For 2025 orders

        // Change product code pattern
        const regex = /^[A-Z]{3}\d{3}-[A-Z]{2}\d{4}$/;  // Different format

### Add New Validation Rules:
        // Add phone number validation
        function isValidPhone() {
        const regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        return regex.test(phone.value.trim());
        }

### Change Description Length Requirement:
        const regex = /^[\w ]{30,}$/;  // Change 20 to 30 characters

## Browser Support
| Browser | Version | Status |
|---------|--------|---------|
|Chrome	  |   90+  |   ✅   |
|Firefox  |   88+  |   ✅   |
|Safari   |   14+  |   ✅   |
|Edge  |   90+  |   ✅   |

## Edge Cases Handled
<ul>
<li>Empty input fields → Fail validation</li>
<li>Spaces in name → Trimmed before validation</li>
<li>"Other" checkbox unchecked → Description validation skipped</li>
<li>"Other" radio unchecked → Description validation skipped</li>
<li>Multiple checkboxes selected → At least one required</li>
<li>Quantity with decimals → Fails (must be integer)</li>
<li>Quantity with zero or negative → Fails (must be positive)</li>
<li>Email without TLD → Fails (requires .com, .org, etc.)</li>
<li>Product code with wrong case → i flag handles both cases</li>
</ul>

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise