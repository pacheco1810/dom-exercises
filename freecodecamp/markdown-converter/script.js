const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown(){
    let text = markdownInput.value;

    //Headings
    text = text.replace(/^\#\s(.+)/mg,"<h1>$1</h1>");
    text = text.replace(/^\#{2}\s(.+)/mg,"<h2>$1</h2>");
    text = text.replace(/^\#{3}\s(.+)/mg,"<h3>$1</h3>");
    //Blockquote
    text = text.replace(/^>\s(.+)/mg,"<blockquote>$1</blockquote>");
    //Images
    text = text.replace(/!\[(.+)\]\((.+)\)/g, '<img alt="$1" src="$2">');
    //Links 
    text = text.replace(/\[(.+)\]\((.+)\)/g, '<a href="$2">$1</a>');
    //Strong
    text = text.replace(/(\*\*|__)(.+?)\1/g,"<strong>$2</strong>");
    //Italic
    text = text.replace(/(\*|_)(.+?)\1/g, "<em>$2</em>");

    return text;
}

markdownInput.addEventListener("input", () => {
    const html = convertMarkdown();

    htmlOutput.textContent = html;

    preview.innerHTML = html;
});

