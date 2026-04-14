# To-Do List App - DOM Practice (Preview)

## 📝 Problem Description

Build an interactive To-Do List application that allows users to manage their daily tasks. The application displays the current date, allows adding new tasks, marks tasks as completed, and deletes tasks.

### Current Implementation Includes:
- Dynamic date display with calendar icon
- Form to add new tasks
- Checkbox to mark tasks as complete
- Delete individual tasks
- Auto-updating copyright year

## 🎯 Current Status

**PREVIEW VERSION** - Basic functionality implemented and working

| Feature                                       | Status  |
|-----------------------------------------------|---------|
| Date formatting with JavaScript `Date` object |   ✅   |
| Task creation with form submission            |   ✅   |
| Task completion toggle with visual feedback   |   ✅   |
| Task deletion with trash button               |   ✅   |
| Responsive CSS with Grid and clamp()          |   ✅   |
| Custom fonts (Manrope, Inter)                 |   ✅   |

## 📂 Folder Structure
dom-exercises/
└── To-Do List App/
├── index.html # Main structure
├── styles.css # Styling with variables
├── script.js # DOM manipulation logic
└── README.md # Documentation


## 🚀 Usage Example

```bash
1. Open index.html in any modern browser
2. Type "Buy groceries" in the input field
3. Click "Add Task" button
4. ✓ Click checkbox to mark as completed
5. 🗑️ Click trash icon to delete task
```

## 🧠 Concepts Practiced
# JavaScript (DOM Manipulation)
-getElementById, querySelector

-addEventListener (submit, click, change)

-createElement, appendChild, remove

-classList and inline styles

-Date object and toLocaleDateString()

-Form validation with trim()

# CSS Features
-CSS Grid layout (grid-template-rows)

-clamp() for responsive typography

-CSS custom properties (:root variables)

-Modern color syntax: rgba(from var() r g b / alpha)

-Flexbox for alignment

-@import for Google Fonts

# HTML5
-Semantic structure (header, main, footer, section)

-ARIA labels for accessibility

-visually-hidden class for screen readers


## 📋 Pending Features (Final Version)
-localStorage persistence

-Edit existing tasks

-Filter tasks (All/Active/Completed)

-Task counter

-Animations

-Search functionality

## 🔧 Customization Options
# Modify Colors (styles.css):
:root {
    --primary-color: #005EB8;   /* Change main color */
    --secondary-color: #536471; /* Change secondary color */
    --tertiary-color: #2E7D32;  /* Change accent color */
}

# Modify Fonts (styles.css):
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
:root {
    --headline-font: "Your Font", sans-serif;
    --body-font: "Your Font", sans-serif;
}

# 📊 File Details
File	    Size	Purpose
index.html	2.8 KB	Structure and semantics
styles.css	3.6 KB	Visual styling and responsive design
script.js	487 B	DOM manipulation and interactivity
README.md	~2 KB	Documentation

# 🌐 Browser Support
Browser 	Version	    Status
Chrome	      90+	    ✅ Fully supported
Firefox       88+	    ✅ Fully supported
Safari	      14+	    ✅ Fully supported
Edge	      90+	    ✅ Fully supported

# 🐛 Known Issues
None in current preview version

# 🤝 Contributing
This is a practice exercise for DOM manipulation. Feel free to fork and enhance!

# 📄 License
© @ang.dev>_. All rights reserved.

