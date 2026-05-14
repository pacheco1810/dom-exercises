# <p align="center">Theme Switcher - freeCodeCamp DOM Exercise</p>

## Problem Description

Build an interactive theme switcher application that allows users to switch between different visual themes. When a theme is selected, the background color changes and a corresponding message is displayed.

### User Stories:

- Button element with text "Switch Theme"
- Button has id `theme-switcher-button`, `aria-haspopup="true"`, `aria-expanded="false"`, `aria-controls="theme-dropdown"`
- `ul` element with id `theme-dropdown`, `role="menu"`, `aria-labelledby="theme-switcher-button"`, and `hidden` attribute
- `ul` has at least two `li` elements with `role="menuitem"` representing different themes
- Each `li` has id starting with `theme-` (e.g., `theme-light`, `theme-dark`)
- Element with `aria-live="polite"` for status messages
- Themes array with objects containing `name` and `message` properties
- Clicking button toggles dropdown visibility
- When dropdown visible, `aria-expanded="true"`
- Clicking button again closes dropdown with `aria-expanded="false"`
- Selecting theme adds `theme-<name>` class to body
- Selected theme message displays in `aria-live="polite"` element
- Switching themes updates body class and message

### Theme Data:

| Theme | Class | Message |
|-------|-------|---------|
| Light | `theme-light` | "Hello sunshine — Light theme is on!" |
| Dark | `theme-dark` | "The night is yours — Dark theme is on!" |

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Button with "Switch Theme" text | ✅ |
| Button with correct id and ARIA attributes | ✅ |
| UL dropdown with role="menu" | ✅ |
| UL with hidden attribute initially | ✅ |
| Two LI items with role="menuitem" | ✅ |
| LI ids start with "theme-" | ✅ |
| Element with aria-live="polite" | ✅ |
| Themes array with name and message | ✅ |
| Button toggles dropdown visibility | ✅ |
| ARIA expanded attribute toggles correctly | ✅ |
| Theme selection adds class to body | ✅ |
| Status message updates on theme change | ✅ |
| Dropdown closes after theme selection | ✅ |

## Folder Structure
freecodecamp/

├── character-counter/

├── museum-gallery/

├── football-cards/

└── theme-switcher/

├── index.html

├── styles.css

├── script.js

└── README.md

## Usage Example
1. Open index.html in any browser
2. Click "Switch Theme" button
3. Dropdown menu appears showing Light and Dark options
4. Click "Dark" option
5. Background changes to dark, text changes to white
6. Status message shows: "The night is yours — Dark theme is on!"
7. Click "Switch Theme" button again
8. Dropdown appears, click "Light"
9. Background changes back to light theme
10. Status message updates: "Hello sunshine — Light theme is on!"

## Concepts Practiced
### JavaScript (DOM Manipulation & Events)
<ul>
<li>getElementById() for element selection</li>
<li>querySelector() with attribute selector</li>
<li>addEventListener() for click events</li>
<li>Toggling hidden attribute on dropdown</li>
<li>setAttribute() for ARIA attributes</li>
<li>classList.add() and classList.remove()</li>
<li>e.target.matches() for event delegation</li>
<li>replace() for string manipulation</li>
<li>find() array method for theme lookup</li>
</ul>

### ARIA Accessibility
<ul>
<li>aria-haspopup="true" indicates button controls popup</li>
<li>aria-expanded toggles between true/false</li>
<li>aria-controls links button to dropdown</li>
<li>role="menu" and role="menuitem" for menu semantics</li>
<li>aria-labelledby associates dropdown with button</li>
<li>aria-live="polite" announces updates to screen readers</li>
<li>hidden attribute hides dropdown when closed</li>
</ul>

### CSS Features
<ul>
<li>CSS custom properties (variables)</li>
<li>CSS transitions for smooth theme changes</li>
<li>Hover effects on button and menu items</li>
<li>Flexbox for centering layout</li>
<li>Dark and light theme classes</li>
</ul>

## Key Implementation Details
### JavaScript Logic:
        const themes = [
            { name: "light", message: "Hello sunshine — Light theme is on!" },
            { name: "dark", message: "The night is yours — Dark theme is on!" }
        ];
        
        const switcherButton = document.getElementById("theme-switcher-button");
        const themeDropdown = document.getElementById("theme-dropdown");
        const statusMessage = document.querySelector('[aria-live="polite"]');
        
        // Toggle dropdown on button click
        switcherButton.addEventListener("click", () => {
            themeDropdown.hidden = !themeDropdown.hidden;
            switcherButton.setAttribute("aria-expanded", !themeDropdown.hidden);
        });
        
        // Handle theme selection
        themeDropdown.addEventListener("click", (e) => {
            if (e.target.matches("li")) {
                const selectedTheme = e.target.id.replace("theme-", "");
                
                document.body.classList.remove("theme-light", "theme-dark");
                document.body.classList.add(`theme-${selectedTheme}`);
                
                const currentTheme = themes.find(theme => theme.name === selectedTheme);
                statusMessage.textContent = currentTheme.message;
                
                themeDropdown.hidden = true;
                switcherButton.setAttribute("aria-expanded", "false");
            }
        });

### Theme Classes CSS:
        .theme-light {
            background-color: var(--white-color);
        }
        
        .theme-dark {
            background-color: var(--back-color);
            color: var(--white-color);
        }

## ARIA Implementation:
        <button id="theme-switcher-button" 
                aria-haspopup="true" 
                aria-expanded="false" 
                aria-controls="theme-dropdown">
            Switch Theme
        </button>
        
        <ul id="theme-dropdown" 
            role="menu" 
            aria-labelledby="theme-switcher-button" 
            hidden>
            <li role="menuitem" id="theme-light">Light</li>
            <li role="menuitem" id="theme-dark">Dark</li>
        </ul>
        
        <div id="status" aria-live="polite"></div>

## Customization Options
### Add New Theme:
1. Add new li in HTML:
   
        <li role="menuitem" id="theme-ocean">Ocean</li>

3. Add theme object to array:
   
        { name: "ocean", message: "Dive into calm — Ocean theme is on!" }

4. Add CSS class:
   
        .theme-ocean {
            background-color: #006994;
            color: #ffffff;
        }

### Modify Messages:
Change message property in themes array

### Change Colors:
Modify CSS variables in :root

## File Details
| File | Lines | Size | Purpose |
|------|-------|------|---------|
| index.html | ~30 | ~1.0 KB | Button, dropdown menu, and aria-live status container |
| styles.css | ~70 | ~1.6 KB | Light/dark theme classes, hover effects, transitions |
| script.js | ~35 | ~1.1 KB | Theme array, dropdown toggle, theme switching logic |
| README.md | ~200 | ~5.0 KB | Complete documentation and usage guide |

## Browser Support
|Browser|	Version|	Status|
|-------|--------|--------|
|Chrome	|90+|	✅|
|Firefox	|88+	|✅|
|Safari|	14+	|✅|
|Edge|	90+	|✅|

## Edge Cases Handled
<ul>
<li>Clicking same theme twice still updates (no errors)</li>
<li>Dropdown closes automatically after theme selection</li>
<li>ARIA attributes stay in sync with dropdown state</li>
<li>Event delegation works for dynamically added items</li>
<li>Theme persists until new selection</li>
<li>Smooth transitions between themes</li>
</ul>

## Key Learning Outcomes
1. After completing this exercise, you will understand:
2. How to create accessible dropdown menus with ARIA attributes
3. How to toggle element visibility with hidden attribute
4. How to use aria-expanded to communicate state to screen readers
5. How to use aria-live="polite" for dynamic content announcements
6. How to use e.target.matches() for event delegation
7. How to dynamically add/remove CSS classes with classList
8. How to use find() array method for object lookup
9. How to create smooth theme transitions with CSS
10. How to structure theme data in JavaScript arrays

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise
