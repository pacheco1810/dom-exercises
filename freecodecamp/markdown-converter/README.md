# <h1 align="center">Markdown to HTML Converter - freeCodeCamp DOM Exercise</h1>

## 📝 Problem Description

Build a Markdown to HTML converter application that transforms Markdown syntax into HTML elements in real-time. The app displays both the raw HTML output and a rendered preview.

### User Stories:

- `convertMarkdown()` function with no parameters
- Uses regular expressions to convert markdown to HTML
- Converts headings (h1, h2, h3) using `#` symbols
- Converts bold text (`**bold**` or `__bold__`) to `<strong>`
- Converts italic text (`*italic*` or `_italic_`) to `<em>`
- Converts images (`![alt](src)`) to `<img>`
- Converts links (`[text](URL)`) to `<a>`
- Converts quotes (`> quote`) to `<blockquote>`
- Raw HTML displayed in `#html-output`
- Rendered HTML displayed in `#preview`
- Real-time conversion using `input` event

### Markdown to HTML Table:

| Markdown | HTML |
|----------|------|
| `# heading 1` | `<h1>heading 1</h1>` |
| `## heading 2` | `<h2>heading 2</h2>` |
| `### heading 3` | `<h3>heading 3</h3>` |
| `**bold text**` or `__bold text__` | `<strong>bold text</strong>` |
| `*italic text*` or `_italic text_` | `<em>italic text</em>` |
| `![alt-text](image-source)` | `<img alt="alt-text" src="image-source">` |
| `[link text](URL)` | `<a href="URL">link text</a>` |
| `> quote` | `<blockquote>quote</blockquote>` |

## 🎯 Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| `convertMarkdown()` function exists | ✅ |
| Headings h1, h2, h3 conversion | ✅ |
| Bold text (`**` or `__`) to `<strong>` | ✅ |
| Italic text (`*` or `_`) to `<em>` | ✅ |
| Images to `<img>` | ✅ |
| Links to `<a>` | ✅ |
| Quotes to `<blockquote>` | ✅ |
| Raw HTML in `#html-output` | ✅ |
| Rendered HTML in `#preview` | ✅ |
| Real-time `input` event | ✅ |

## 📂 Folder Structure
freecodecamp/

└── markdown-converter/

├── index.html (provided by FCC)

├── styles.css (provided by FCC)

├── script.js (your implementation)

└── README.md


## 📊 File Details

| File | Purpose | Provider |
|------|---------|----------|
| index.html | Structure with textarea, output, preview | freeCodeCamp |
| styles.css | Styling, responsive layout | freeCodeCamp |
| script.js | Markdown conversion logic, event handling | **Your code** |
| README.md | Documentation | This file |

## 🚀 Usage Example

1. Open index.html in any browser
2. Enter Markdown in the textarea
3. Raw HTML appears in middle column
4. Rendered HTML appears in right column
5. Try: # Hello World → <h1>Hello World</h1>
6. Try: **bold** → <strong>bold</strong>
7. Try: [Google](https://google.com) → <a href="https://google.com">Google</a>

## JavaScript Concepts Practiced
### Regular Expressions
<ul>
<li>replace() with regex patterns</li>
<li>^ (start of line) and $ (end of line) anchors</li>
<li>\s for whitespace matching</li>
<li>( ) capturing groups for extraction</li>
<li>\1 backreference for repeated patterns</li>
<li>m (multiline) flag for line-by-line matching</li>
<li>g (global) flag for all matches</li>
</ul>

### String Manipulation
<ul>
<li>Pattern matching with regex groups</li>
<li>Template literals for dynamic replacement</li>
<li>Text transformation pipeline</li>
</ul>

### Event Handling
<ul>
<li>input event for real-time updates</li>
<li>Event listener on textarea</li>
</ul>

### DOM Manipulation
<ul>
<li>textContent vs innerHTML</li>
<li>Content rendering for preview</li>
</ul>

## JavaScript Implementation Details 
### Complete JavaScript Code:
        const markdownInput = document.getElementById("markdown-input");
        const htmlOutput = document.getElementById("html-output");
        const preview = document.getElementById("preview");

        function convertMarkdown() {
            let text = markdownInput.value;

            // Headings
            text = text.replace(/^\#\s(.+)/mg, "<h1>$1</h1>");
            text = text.replace(/^\#{2}\s(.+)/mg, "<h2>$1</h2>");
            text = text.replace(/^\#{3}\s(.+)/mg, "<h3>$1</h3>");
            
            // Blockquote
            text = text.replace(/^>\s(.+)/mg, "<blockquote>$1</blockquote>");
            
            // Images
            text = text.replace(/!\[(.+)\]\((.+)\)/g, '<img alt="$1" src="$2">');
            
            // Links
            text = text.replace(/\[(.+)\]\((.+)\)/g, '<a href="$2">$1</a>');
            
            // Bold (strong)
            text = text.replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>");
            
            // Italic (emphasis)
            text = text.replace(/(\*|_)(.+?)\1/g, "<em>$2</em>");

            return text;
        }

        markdownInput.addEventListener("input", () => {
            const html = convertMarkdown();
            htmlOutput.textContent = html;
            preview.innerHTML = html;
        });

### Key Line-by-Line Explanation:
|Pattern|Explanation|
|-------|-----------|
|/^\#\s(.+)/mg|Matches # heading at start of line, captures heading text|
|/^\#{2}\s(.+)/mg|Matches ## heading at start of line|
|/^\#{3}\s(.+)/mg|Matches ### heading at start of line|
|/^>\s(.+)/mg|Matches > quote at start of line|
|/!\[(.+)\]\((.+)\)/g|Matches ![alt](src), captures alt and src|
|/\[(.+)\]\((.+)\)/g|Matches [text](URL), captures text and URL|
|/(\*\*|__)(.+?)\1/g|Matches **bold** or __bold__, captures inner text|
|/(\*|_)(.+?)\1/g|Matches *italic* or _italic_, captures inner text|

### Regex Flag Breakdown:
|Flag|Meaning|Used For|
|----|-------|--------|
|m	|Multiline|	^ matches start of each line, not just string start|
|g	|Global|	Finds all matches in the string|

### textContent vs innerHTML:
        // Raw HTML (shows tags as text)
        htmlOutput.textContent = html;  // "<h1>Hello</h1>"

        // Rendered HTML (renders tags)
        preview.innerHTML = html;       // "Hello" (as heading)

## Customization Options
### Add More Markdown Features:
        // Horizontal rule
        text = text.replace(/^\---$/mg, "<hr>");

        // Code blocks (inline)
        text = text.replace(/`(.+?)`/g, "<code>$1</code>");

        // Unordered lists
        text = text.replace(/^\-\s(.+)/mg, "<li>$1</li>");

### Change Output Format:
        // Add syntax highlighting to raw output
        htmlOutput.textContent = html.replace(/&/g, '&amp;')
                                    .replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;');

## Browser Support
|Browser|	Version|	Status|
|-------|--------|--------|
|Chrome	|90+|	✅|
|Firefox	|88+	|✅|
|Safari|	14+	|✅|
|Edge|	90+	|✅|

## Edge Cases Handled
<ul>
<li>Multiple headings on different lines → Each converts correctly</li>
<li>Mixed formatting → Handled in sequence</li>
<li>Empty input → Returns empty string</li>
<li>Nested formatting → Works with proper regex order</li>
<li>Special characters in alt text → Handled by regex groups</li>
<li>Different line endings → m flag handles all</li>
</ul>

## 

## Contributing
This is a freeCodeCamp DOM exercise solution.

## License
freeCodeCamp DOM Exercise