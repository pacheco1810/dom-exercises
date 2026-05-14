const themes = [
    { name: "light", message: "Hello sunshine — Light theme is on!" },
    { name: "dark", message: "The night is yours — Dark theme is on!" }
];

const switcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

const statusMessage = document.querySelector(
    '[aria-live="polite"]'
);

switcherButton.addEventListener("click", () => {

    themeDropdown.hidden = !themeDropdown.hidden;

    switcherButton.setAttribute(
        "aria-expanded",
        !themeDropdown.hidden
    );
});

themeDropdown.addEventListener("click", (e) => {

    if (e.target.matches("li")) {

        const selectedTheme =
            e.target.id.replace("theme-", "");

        document.body.classList.remove(
            "theme-light",
            "theme-dark"
        );

        document.body.classList.add(
            `theme-${selectedTheme}`
        );

        const currentTheme = themes.find(
            theme => theme.name === selectedTheme
        );

        statusMessage.textContent =
            currentTheme.message;

        themeDropdown.hidden = true;

        switcherButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});