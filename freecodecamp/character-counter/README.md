# Real-Time Character Counter - freeCodeCamp DOM Exercise

##  Problem Description

Build a real-time character counter application that displays the number of characters entered in a textarea element. The counter updates in real-time as the user types.

### User Stories:

- Textarea element with id `text-input`
- Paragraph element with id `char-count`
- Initially displays "Character Count: 0/50"
- When textarea contains "hello coder", counter shows "Character Count: 11/50"
- When textarea contains "i am a programmer", counter shows "Character Count: 17/50"
- When textarea contains "hello world", counter shows "Character Count: 11/50"
- When textarea contains a 50-character sentence, counter shows "Character Count: 50/50"
- User cannot enter more than 50 characters (JavaScript-only solution, no maxlength attribute)
- When character count reaches 50/50, text displays in red

##  Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Textarea with id `text-input` | ✅ |
| Counter with id `char-count` | ✅ |
| Real-time character counting | ✅ |
| 50 character limit (JS only) | ✅ |
| Automatic trimming at 50 chars | ✅ |
| Red text at 50/50 | ✅ |
| All test cases pass | ✅ |

##  Folder Structure
freecodecamp/

└── character-counter/

├── index.html

├── styles.css

├── script.js

└── README.md


## Usage Example
1. Open index.html in any browser
2. Start typing in the textarea
3. Watch the counter update in real-time
4. Try typing more than 50 characters (it won't let you)

Test cases to verify:
- Type "hello coder" → Shows "Character Count: 11/50"
- Type "i am a programmer" → Shows "Character Count: 17/50"
- Type "hello world" → Shows "Character Count: 11/50"
- Type 50 characters → Shows "Character Count: 50/50" in red

## Concepts Practiced
### JavaScript (DOM Manipulation)
<ul>
<li>getElementById() to select elements</li>

<li>addEventListener() with input event</li>

<li>value property to get textarea content</li>

<li>length property to count characters</li>

<li>slice() method to trim excess characters</li>

<li>classList.add() and classList.remove() for dynamic styling</li>

<li>Event Handling
Real-time updates using input event</li>

<li>Preventing character overflow with JavaScript</li>
</ul>

### CSS 
<ul>
<li>CSS custom properties (variables)</li>

<li>Linear gradients</li>

<li>Flexbox for centering</li>

<li>Responsive design</li>

<li>Dark theme with accent colors</li>
</ul>

### HTML5
<ul>
<li>Semantic structure with main element</li>

<li>Proper id attributes for DOM selection</li>
</ul>

## Key Implementation Details
### JavaScript Logic:
    const textarea = document.getElementById("text-input");
    const para = document.getElementById("char-count");
    const limit = 50;
    
    textarea.addEventListener("input", function(e){
        if(textarea.value.length > limit){
            textarea.value = textarea.value.slice(0, limit);
        } else {
            para.innerText = `Character Count: ${textarea.value.length}/50`;
            if(textarea.value.length === limit){
                para.classList.add("paraFull");
            } else {
                para.classList.remove("paraFull");
            }
        }
    });

### CSS Highlight:
    .paraFull {
        color: red;
    }
    
    #text-input {
        margin: 1rem;
        max-width: 320px;
        height: 4rem;
        padding: .5rem;
        box-shadow: 1px 2px 6px 0 var(--white-color);
    }

### Color Variables:
    :root {
        --back-color: #1a1e29;
        --blue-color: #132d46;
        --green-color: #01c38e;
        --white-color: #f4f4f4;
    }

## Customization Options
### Modify Character Limit:
Change const limit = 50 in script.js to any value

### Change Colors:
Modify CSS variables in :root:

--back-color (background)

--blue-color (gradient end)

--green-color (heading)

--white-color (text and shadow)

### Modify Fonts:
Update @import URL change font variables:

--titles-font for headings

--curren-text for body text

## File Details
|File	|Purpose|
|-------|-------|
index.html	|Structure with textarea and counter
styles.css	|Dark theme styling with gradients
script.js	|Real-time counting and character limit
README.md	|Documentation

## Browser Support

| Browser | Version | Status |
|---------|--------|---------|
|Chrome	  |   90+  |   ✅   |
|Firefox  |   88+  |   ✅   |
|Safari   |   14+  |   ✅   |
|Edge  |   90+  |   ✅   |

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise
