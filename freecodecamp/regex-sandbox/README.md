# <h1 align="center">RegEx Sandbox - freeCodeCamp DOM Exercise</h1>

## Problem Description

Build a regular expression sandbox application that allows users to test regex patterns against a test string. The app highlights matches in the string and displays the matched results.

### User Stories:

- Access `#pattern`, `#test-string`, `#test-btn`, and `#result` elements and save them in variables
- Access `#i` and `#g` flag checkboxes and save them in variables
- Create `getFlags()` function that returns string containing checked flags
- Clicking `#test-btn` highlights matches in the test string using `<span class="highlight">`
- When matches exist, display matched text in `#result` (comma-separated for multiple matches)
- When no matches exist, display "no match" in `#result`

### Regex Flags:
| Flag | Name | Description |
|------|------|-------------|
| `i` | Case-insensitive | Ignores case when matching |
| `g` | Global | Finds all matches, not just the first |

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| DOM elements saved in variables | ✅ |
| Flag checkboxes saved in variables | ✅ |
| `getFlags()` function returns correct flags | ✅ |
| Matches highlighted with span class | ✅ |
| Matched text displayed in result | ✅ |
| Multiple matches separated by comma + space | ✅ |
| "no match" displayed when no matches | ✅ |

## Folder Structure
freecodecamp/

└── regex-sandbox/

├── index.html (provided by FCC)

├── styles.css (provided by FCC)

├── script.js (your implementation)

└── README.md


## File Details

| File | Purpose | Provider |
|------|---------|----------|
| index.html | Structure with pattern input, test string, flags, result | freeCodeCamp |
| styles.css | Styling, dark theme, highlight class | freeCodeCamp |
| script.js | Regex logic, flag handling, DOM manipulation | **Your code** |
| README.md | Documentation | This file |

## Usage Example

1. Open index.html in any browser
2. Enter regex pattern (e.g., "hello")
3. Enter test string (e.g., "hello world, hello again")
4. Check flags (i for case-insensitive, g for global)
5. Click "Test Regex" button
6. All "hello" matches are highlighted in green
7. Result shows: "hello, hello"

## JavaScript Concepts Practiced
### Regular Expressions
<ul>
<li>RegExp() constructor for dynamic regex creation</li>
<li>Pattern string and flags as parameters</li>
<li>match() method for finding matches</li>
</ul>

### String Methods
<ul>
<li>replace() with regex and replacement string</li>
<li>$& special replacement pattern (matched substring)</li>
<li>join() for array to string conversion</li>
</ul>

### DOM Manipulation
<ul>
<li>getElementById() for element selection</li>
<li>textContent for reading text without HTML</li>
<li>innerHTML for writing HTML with span tags</li>
<li>value property for input elements</li>
<li>checked property for checkboxes</li>
</ul>

### Event Handling
<ul>
<li>addEventListener() with 'click' event</li>
<li>Dynamic regex creation on each click</li>
</ul>

### Functions
<ul>
<li>getFlags() function for flag collection</li>
<li>Conditional string building</li>
</ul>

## JavaScript Implementation Details
### Complete JavaScript Code:
        // DOM Element Selection
        const regexPattern = document.getElementById("pattern");
        const stringToTest = document.getElementById("test-string");
        const testButton = document.getElementById("test-btn");
        const testResult = document.getElementById("result");

        // Flag Checkboxes
        const caseInsensitiveFlag = document.getElementById("i");
        const globalFlag = document.getElementById("g");

        // Function to get selected flags
        function getFlags() {
            let strFlags = "";
            
            if (caseInsensitiveFlag.checked) strFlags += "i";
            if (globalFlag.checked) strFlags += "g";
            
            return strFlags;
        }

        // Test button click handler
        testButton.addEventListener("click", () => {
            // Create regex with pattern and flags
            const regex = new RegExp(regexPattern.value, getFlags());
            
            // Highlight matches by replacing with span
            stringToTest.innerHTML = stringToTest.textContent.replace(
                regex,
                '<span class="highlight">$&</span>'
            );
            
            // Find matches and display result
            const match = stringToTest.textContent.match(regex);
            if (match) {
                testResult.innerText = match.join(", ");
            } else {
                testResult.innerText = "no match";
            }
        });

### Key Line-by-Line Explanation:
|Line|Explanation|
|----|-----------|
|new RegExp(regexPattern.value, getFlags())|Creates regex dynamically from user input|
|stringToTest.textContent|Gets plain text without HTML span tags|
|'<span class="highlight">$&</span>'|Wraps each match in highlight span; $& = matched text|
|stringToTest.innerHTML = ...|Replaces content with highlighted HTML|
|match.join(", ")|Converts array of matches to comma-separated string|

### Regex Constructor vs Literal:
        // Literal (static) - cannot use variables
        const regex = /hello/gi;

        // Constructor (dynamic) - can use variables
        const regex = new RegExp(regexPattern.value, getFlags());

### Special Replacement Pattern $&:
        // $& inserts the entire matched substring
        "hello world".replace(/hello/, '<span>$&</span>')
        // Returns: '<span>hello</span> world'

## Customization Options
### Add New Flags:
        // Add 'm' (multiline) flag
        const multilineFlag = document.getElementById("m");

        function getFlags() {
            let strFlags = "";
            if (caseInsensitiveFlag.checked) strFlags += "i";
            if (globalFlag.checked) strFlags += "g";
            if (multilineFlag.checked) strFlags += "m";
            return strFlags;
        }

### Change Result Format:
        // Display as array format
        testResult.innerText = JSON.stringify(match);

        // Display count of matches
        testResult.innerText = `${match.length} match(es) found: ${match.join(", ")}`;

## Browser Support
| Browser | Version | Status |
|---------|--------|---------|
|Chrome	  |   90+  |   ✅   |
|Firefox  |   88+  |   ✅   |
|Safari   |   14+  |   ✅   |
|Edge  |   90+  |   ✅   |

## Edge Cases Handled
<ul>
<li>Empty pattern → Creates regex that matches nothing</li>
<li>No flags checked → getFlags() returns empty string</li>
<li>No matches found → Displays "no match"</li>
<li>Multiple matches → Properly separated by comma + space</li>
<li>Special regex characters → Handled by RegExp constructor</li>
<li>Test string with existing HTML → textContent prevents nested spans</li>
</ul>

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise