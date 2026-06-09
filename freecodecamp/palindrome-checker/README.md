# <h1 align="center">Palindrome Checker - freeCodeCamp DOM Exercise</h1>

## Problem Description

Build an application that checks whether a given word or phrase is a palindrome. A palindrome is a word or sentence that reads the same forwards and backwards, ignoring punctuation, case, and spacing.

### User Stories:

- Input element with id `text-input`
- Button element with id `check-btn`
- div, span, or p element with id `result`
- Clicking `#check-btn` with empty input shows alert "Please input a value"
- Single letter "A" should show "A is a palindrome"
- "eye" should show "eye is a palindrome"
- "_eye" should show "_eye is a palindrome"
- "race car" should show "race car is a palindrome"
- "not a palindrome" should show "not a palindrome is not a palindrome"
- "A man, a plan, a canal. Panama" should show it is a palindrome
- "never odd or even" should show it is a palindrome
- "nope" should show "nope is not a palindrome"
- "almostomla" should show "almostomla is not a palindrome"
- "My age is 0, 0 si ega ym." should show it is a palindrome
- "1 eye for of 1 eye." should show it is not a palindrome
- "0_0 (: /-\ :) 0-0" should show it is a palindrome
- "five|\_/|four" should show it is not a palindrome

### Palindrome Rules:
- Remove all non-alphanumeric characters (punctuation, spaces, symbols)
- Convert to same case (lowercase)
- Compare original vs reversed string

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Input element with id `text-input` | ✅ |
| Button with id `check-btn` | ✅ |
| Result element with id `result` | ✅ |
| Empty input shows alert | ✅ |
| Single letter "A" returns true | ✅ |
| "eye" returns true | ✅ |
| "_eye" returns true | ✅ |
| "race car" returns true | ✅ |
| "not a palindrome" returns false | ✅ |
| Complex sentence with punctuation returns true | ✅ |
| All test cases pass | ✅ |

## Folder Structure
freecodecamp/

├── character-counter/

├── museum-gallery/

├── football-cards/

├── theme-switcher/

└── palindrome-checker/

├── index.html

├── styles.css

├── script.js

└── README.md


## File Details

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| index.html | ~30 | ~1.0 KB | Input field, check button, result display, info section |
| styles.css | ~90 | ~1.8 KB | Dark theme styling, form container, hover effects |
| script.js | ~25 | ~0.8 KB | Palindrome logic, regex cleanup, event handling |
| README.md | ~200 | ~5.0 KB | Complete documentation and test cases |

## Usage Example

1. Open index.html in any browser
2. Enter text in input field (e.g., "race car")
3. Click "Submit" button
4. Result displays: "race car is a palindrome"
5. Try "not a palindrome" → "not a palindrome is not a palindrome"
6. Empty input shows alert: "Please input a value"

## Concepts Practiced
### JavaScript (Palindrome Logic)
<ul>
<li>Regular expressions (/[^a-zA-Z0-9]/g) to remove non-alphanumeric characters</li>
<li>replace() method for string sanitization</li>
<li>toLowerCase() for case normalization</li>
<li>split(), reverse(), join() for string reversal</li>
<li>addEventListener() for click events</li>
<li>DOM manipulation with innerText</li>
<li>Alert for validation</li>
</ul>

### CSS Features
<ul>
<li>CSS custom properties (variables)</li>
<li>Flexbox for centering</li>
<li>Form styling with transparent input</li>
<li>Green accent color for branding</li>
<li>Hover effects on button and input</li>
<li>:has() pseudo-class for parent styling</li>
<li>Responsive design with max-width</li>
</ul>

## Key Implementation Details
### JavaScript Logic:
        const text = document.getElementById("text-input");
        const btn = document.getElementById("check-btn");
        const result = document.getElementById("result");

        function isPalindrome(str) {
            const regex = /[^a-zA-Z0-9]/g;
            str = str.replace(regex, "").toLowerCase();
            return str === str.split("").reverse().join("");
        }

        btn.addEventListener("click", () => {
            if (text.value === "") {
                alert("Please input a value");
                result.innerText = "";
                return;
            }
            if (isPalindrome(text.value)) {
                result.innerText = `${text.value} is a palindrome`;
            } else {
                result.innerText = `${text.value} is not a palindrome`;
            }
        });

### Regular Expression Breakdown:
        const regex = /[^a-zA-Z0-9]/g;
        // [^...] = negated set (match characters NOT in this set)
        // a-z = lowercase letters
        // A-Z = uppercase letters
        // 0-9 = numbers
        // g = global flag (replace all occurrences)

        // Example: "race car" → "racecar"
        // Example: "A man, a plan, a canal. Panama" → "amanaplanacanalpanama"

### CSS Highlight:
        form {
            background-color: var(--back-color);
            border-radius: 20px;
            height: 400px;
        }

        form input {
            background-color: transparent;
            border-bottom: 2px solid var(--green-color);
        }

        .controls:has(#check-btn:hover) #text-input {
            border-bottom: 2px solid #009068;
        }

        .wts_palindrome {
            background-color: var(--green-color);
            border-radius: 20px;
        }

## Customization Options
### Change Palindrome Rules:
Modify regex in isPalindrome() function:
        // Allow spaces
        const regex = /[^a-zA-Z0-9 ]/g;

        // Allow only letters (no numbers)
        const regex = /[^a-zA-Z]/g;

### Change Colors:
Modify CSS variables in :root

### Change Message Format:
Modify template literals in event listener:

        javascript
        result.innerText = `✓ "${text.value}" is a palindrome!`;

## Test Cases
|Input	| Expected Output |Status|
|-------|-----------------|------|
|A	|A is a palindrome	|✅|
|eye	|eye is a palindrome |✅|
|_eye	|_eye is a palindrome|✅|
|race car|race car is a palindrome|✅|
|not a palindrome|not a palindrome is not a palindrome|✅|
|A man, a plan, a canal. Panama|... is a palindrome|✅|
|never odd or even|... is a palindrome|✅|
|nope|nope is not a palindrome|✅|
|almostomla|almostomla is not a palindrome|✅|
|My age is 0, 0 si ega ym.|... is a palindrome|✅|
|1 eye for of 1 eye.|... is not a palindrome|✅|
|0_0 (: /-\ :) 0-0|... is a palindrome|✅|

## Browser Support
| Browser | Version | Status |
|---------|--------|---------|
|Chrome	  |   90+  |   ✅   |
|Firefox  |   88+  |   ✅   |
|Safari   |   14+  |   ✅   |
|Edge  |   90+  |   ✅   |

## Edge Cases Handled
<ul>
<li>Empty input → Alert message</li>
<li>Single character → Always palindrome</li>
<li>Mixed case → Normalized to lowercase</li>
<li>Punctuation and spaces → Removed via regex</li>
<li>Numbers → Included as alphanumeric</li>
<li>Special characters (_, /, , |, etc.) → Removed by regex</li>
<li>Long sentences with punctuation → Correctly evaluated</li>
</ul>

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise