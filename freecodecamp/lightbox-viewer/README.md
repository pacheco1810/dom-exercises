# <p align="center"> Museum Gallery - Lightbox | freeCodeCamp DOM Exercise</p>

## Problem Description

Build an interactive museum gallery that displays thumbnail images. When a thumbnail is clicked, a lightbox opens showing the full-size version of the image. The lightbox can be closed by clicking the close button or clicking outside the image.

### User Stories:

- Div with class `gallery` inside body
- Three thumbnail images inside `.gallery`, each with class `gallery-item`
- Thumbnail image URLs:
  - `https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg`
  - `https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg`
  - `https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg`
- Div with class `lightbox` inside body
- Button with id `close-btn` inside `.lightbox` (text: `&times;`)
- Image with id `lightbox-image` inside `.lightbox`
- `.lightbox` must have fixed positioning to open above gallery images
- `.lightbox` must cover entire viewport (100% width and height, starting at top-left)
- `.lightbox` must have background color
- `.lightbox` must initially have `display: none` to be hidden
- When clicking `.gallery-item`, `.lightbox` display changes to `flex` to show it
- When clicking `.gallery-item`, `#lightbox-image` src updates to full-size version (remove `-thumbnail` from src)
- Full-size image URLs:
  - `https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg`
  - `https://cdn.freecodecamp.org/curriculum/labs/storm.jpg`
  - `https://cdn.freecodecamp.org/curriculum/labs/trees.jpg`
- When `.lightbox` is visible and user clicks `#close-btn` or the `.lightbox` background, display returns to `none`

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Gallery div with class `gallery` | ✅ |
| Three thumbnails with class `gallery-item` | ✅ |
| Lightbox div with class `lightbox` | ✅ |
| Close button with id `close-btn` | ✅ |
| Image with id `lightbox-image` | ✅ |
| Fixed positioning on lightbox | ✅ |
| Lightbox covers full viewport | ✅ |
| Initial display: none | ✅ |
| Click thumbnail shows lightbox (flex) | ✅ |
| Click thumbnail loads full-size image | ✅ |
| Click close button hides lightbox | ✅ |
| Click lightbox background hides lightbox | ✅ |

## Folder Structure
freecodecamp/

├── character-counter/

└── museum-gallery/

├── index.html

├── styles.css

├── script.js

└── README.md


## Usage Example

1. Open index.html in any browser
2. View three museum gallery thumbnails
3. Click any thumbnail image
4. Lightbox opens showing full-size version
5. Click the X button to close
6. Or click outside the image to close

## Concepts Practiced
### JavaScript (DOM Manipulation & Events)
<ul>
<li>querySelector() and getElementById() for element selection</li>
<li>addEventListener() with click event</li>
<li>e.target.closest() for proper event targeting</li>
<li>Dynamic src attribute manipulation with replace()</li>
<li>Conditional display toggling with inline styles</li>
<li>Event Handling</li>
<li>Event delegation on gallery container</li>
<li>Closing lightbox from two sources (button + background)</li>
<li>Preventing unintended event bubbling</li>
</ul>

### CSS Features
<ul>
<li>CSS custom properties (variables)</li>
<li>Flexbox for centering content</li>
<li>Fixed positioning for lightbox overlay</li>
<li>backdrop-filter: blur() for modern glass effect</li>
<li>rgba(from var() r g b / alpha) syntax</li>
<li>Hover effects with transform: scale()</li>
<li>Transitions for smooth animations</li>
</ul>

### HTML5
<ul>
<li>Semantic structure with main</li>
<li>Proper alt attributes for accessibility</li>
<li>IDs for specific elements</li>
<li>Classes for reusable styling</li>
</ul>

## Key Implementation Details5
### JavaScript Logic:
    const gallery = document.querySelector(".gallery");
    const box = document.querySelector(".lightbox");
    const img = document.getElementById("lightbox-image");
  
    gallery.addEventListener("click", (e) => {
        const image = e.target.closest(".gallery-item");
        if (!image) return;
        
        const fullSrc = image.src.replace("-thumbnail", "");
        img.src = fullSrc;
        box.style.display = "flex";
    });
  
    const btnClose = document.getElementById("close-btn");
    btnClose.addEventListener("click", () => {
        box.style.display = "none";
    });
    
    box.addEventListener("click", (e) => {
        if (e.target === box) {
            box.style.display = "none";
        }
    });

### CSS Highlight:
    .lightbox {
        position: fixed;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(from var(--back-color) r g b / 80%);
        backdrop-filter: blur(2px);
    }
    
    .gallery-item {
        width: 20rem;
        height: 30rem;
        transition: all .5s;
    }
    
    .gallery-item:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

## Customization Options
### Modify Gallery Images:
Update the src attributes in index.html and corresponding full-size URLs in JavaScript logic

### Change Lightbox Appearance:
Background color: modify --back-color variable

Blur intensity: change backdrop-filter: blur(2px)

Close button style: modify #close-btn CSS

### Adjust Thumbnail Sizes:
Change width and height in .gallery-item class

## File Details
|File|Purpose|
|----|-------|
|index.html|	Gallery structure with thumbnails and lightbox|
|styles.css|	Styling, lightbox overlay, hover effects|
|script.js|	Lightbox toggle and image source management|
|README.md	|Documentation|

## Browser Support
|Browser|	Version|	Status|
|-------|--------|--------|
|Chrome	|90+|	✅|
|Firefox	|88+	|✅|
|Safari|	14+	|✅|
|Edge|	90+	|✅|

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise

