# <p align="center">Random Background Color Changer - freeCodeCamp DOM Exercise</p>

## Problem Description

Build a random background color changer application that displays a random color from a predefined array each time a button is clicked. The hex code of the current color is displayed on the screen.

### User Stories:

- Array `darkColorsArr` with valid hex color strings (syntax errors fixed)
- `getRandomIndex()` function returns a random index using `Math.random()`
- Random index is rounded down using `Math.floor()`
- `body` variable correctly selects the body element
- `bgHexCodeSpanElement` correctly selects element with id `bg-hex-code`
- `changeBackgroundColor()` sets random color from array
- `btn` variable correctly targets button with id `click-btn`
- Click event listener correctly references `changeBackgroundColor` function
- Background changes to random color from `darkColorsArr` each time button is clicked
- Hex code display updates to show current color

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| darkColorsArr syntax fixed | ✅ |
| getRandomIndex returns random index | ✅ |
| Math.floor rounds down correctly | ✅ |
| body variable selects body element | ✅ |
| bg-hex-code element selected correctly | ✅ |
| random color from array on click | ✅ |
| btn selects correct button element | ✅ |
| event listener working correctly | ✅ |
| Background color changes on click | ✅ |
| Hex code updates on display | ✅ |

## Folder Structure

freecodecamp/

└── random-background-changer/

├── index.html

├── styles.css

├── script.js

└── README.md

## Usage Example

1. Open index.html in any browser
2. View initial background color (#1a1e29)
3. Hex code displays current color
4. Click "Change Background Color" button
5. Background changes to random color from array
6. Hex code updates to show new color
7. Click repeatedly to see different colors

## Colors Array

| Index | Color | Hex |
|-------|-------|-----|
| 0 | Red | #B72818 |
| 1 | Orange Red | #FF4629 |
| 2 | Golden | #E6AF00 |
| 3 | Blue | #1D3ECF |
| 4 | Purple | #7912FF |
| 5 | Green | #44F229 |
| 6 | Lime | #C1CB00 |
| 7 | Pink | #F24B6A |
| 8 | Light Blue | #4596FF |
| 9 | Bright Green | #00BF09 |

## Concepts Practiced

### JavaScript (DOM Manipulation & Debugging)

- querySelector() for element selection
- addEventListener() for click events
- Math.random() for random number generation
- Math.floor() for rounding down
- Array indexing and length property
- innerText for updating text content
- style.backgroundColor for dynamic styling
- Debugging syntax errors and ReferenceErrors
- Function references in event listeners

### CSS Features

- CSS custom properties (variables)
- Radial gradient for button hover effect
- Smooth transitions on color change
- Scale transform for button interaction
- Responsive design principles
- Font imports from Google Fonts

### HTML5

- Semantic structure with main and section
- Proper id attributes for DOM selection
- Button element with interactive behavior

## Key Implementation Details

### JavaScript Logic (Fixed):

        const darkColorsArr = [
            "#B72818",
            "#FF4629",
            "#E6AF00",
            "#1D3ECF",
            "#7912FF",
            "#44F229",
            "#C1CB00",
            "#F24B6A",
            "#4596FF",
            "#00BF09"
        ];
        
        function getRandomIndex() {
            const randomIndex = Math.floor(darkColorsArr.length * Math.random());
            return randomIndex;
        }
        
        const body = document.querySelector("body");
        const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
        
        function changeBackgroundColor() {
            const color = darkColorsArr[getRandomIndex()];
            bgHexCodeSpanElement.innerText = color;
            body.style.backgroundColor = color;
        }
        
        const btn = document.querySelector("#click-btn");
        btn.addEventListener("click", changeBackgroundColor);

### Common Debugging Fixes Applied:

| Error | Fix |
|-------|-----|
| Syntax error in array | Added quotes around hex values |
| ReferenceError with math | Capitalized Math object |
| Floating point index | Added Math.floor() |
| TypeError on body | Used querySelector() correctly |
| Wrong selector on btn | Used #click-btn id selector |

## Customization Options

### Add More Colors:
Add new hex values to darkColorsArr array:

        const darkColorsArr = [
            "#B72818",
            "#FF4629",
            // Add more colors
        ];

### Change Button Style:
Modify .btn class in CSS:
- background-color (button background)
- border-radius (rounded corners)
- padding (button size)

### Modify Transitions:
Change transition speed in body CSS:

        body {
            transition: background-color 0.5s ease;
        }

## File Details

| File | Purpose |
|------|---------|
| index.html | Structure with heading, hex display, and button |
| styles.css | Styling, color variables, hover effects |
| script.js | Random color logic and DOM manipulation |
| README.md | Documentation and usage guide |

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |

## Edge Cases Handled

- Random color selection works on every click
- Hex code always matches actual background
- Button hover effects work smoothly
- Smooth transitions between color changes
- All 10 colors can be randomly selected

## Contributing

This is a freeCodeCamp DOM exercise solution (debugging lab).

## License

freeCodeCamp DOM Exercise
