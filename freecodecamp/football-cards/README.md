# <p align="center">Football Team Cards - freeCodeCamp DOM Exercise</p>

##  Problem Description

Build an interactive football team stats card application that displays team information and player cards. Users can filter players by position using a dropdown menu.

### User Stories:

- Display team name, year, and head coach information
- Show all players as cards when page loads
- Filter players by position using dropdown (All Players, Forward, Midfielder, Defender, Goalkeeper)
- Each player card shows player name and position
- Captain's name should display "(Captain)" prefix
- Filter updates cards in real-time when selection changes

### Team Data:

- **Team:** Germany
- **Year:** 1990
- **Head Coach:** Franz Beckenbauer
- **Players:** 11 players (goalkeeper, defenders, midfielders, forwards)
- **Captain:** Lothar Matthäus

## Current Status

**PROJECT FINAL** - Complete exercise solution

| Feature | Status |
|---------|--------|
| Team name displayed | ✅ |
| Year displayed | ✅ |
| Head coach displayed | ✅ |
| All players shown as cards on load | ✅ |
| Dropdown filter by position | ✅ |
| Captain shows "(Captain)" prefix | ✅ |
| Real-time filter updates | ✅ |
| Responsive card layout | ✅ |

## Folder Structure
freecodecamp/

└── football-cards/

├── index.html

├── styles.css

├── script.js

└── README.md


## Usage Example

1. Open index.html in any browser
2. View team stats (Germany, 1990, Franz Beckenbauer)
3. See all 11 player cards displayed
4. Select "Position Forward" from dropdown
5. Only forwards (Rudi Völler, Jürgen Klinsmann) appear
6. Select "Position Goalkeeper" → Only Bodo Illgner appears
7. Select "All Players" → All cards reappear

## Concepts Practiced
### JavaScript (DOM Manipulation & Data)
<ul>
<li>Object data structure for team and players</li>
<li>getElementById() for DOM selection</li>
<li>innerText for text content</li>
<li>Array methods: filter(), map(), join()</li>
<li>Template literals for HTML generation</li>
<li>Ternary operator for conditional rendering</li>
<li>Event listener on select dropdown (change event)</li>
</ul>

### Data Filtering
<ul>
<li>Conditional filtering based on select value</li>
<li>Destructuring objects ({ name, position, isCaptain })</li>
<li>Preserving original data while filtering</li>
</ul>

### CSS Features
<ul>
<li>CSS Grid for page layout (grid-template-rows: auto 1fr auto)</li>
<li>Flexbox for cards and team stats</li>
<li>Responsive design with media queries</li>
<li>CSS custom properties (variables)</li>
<li>Cards with border-radius and white background</li>
</ul>

### HTML5
<ul>
<li>Semantic structure with main, footer</li>
<li>Select dropdown with options</li>
<li>Dynamic card container</li>
</ul>

## Key Implementation Details
### JavaScript Logic:
        const footballTeam = {
        team: "Germany",
        year: 1990,
        headCoach: "Franz Beckenbauer",
        players: [
            {name: "Bodo Illgner", position: "goalkeeper", isCaptain: false},
            {name: "Lothar Matthäus", position: "midfielder", isCaptain: true},
            // ... more players
        ]
        };

        function playerCards(playerPosition) {
        const players = playerPosition === "all"
            ? footballTeam.players
            : footballTeam.players.filter(({ position }) => position === playerPosition);

        return players.map(({ name, position, isCaptain }) => {
            return `
            <div class="player-card">
                <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
                <p>Position: ${position}</p>
            </div>
            `;
        }).join("");
        }

        selectContainer.addEventListener("change", () => {
        playersCards.innerHTML = playerCards(selectContainer.value);
        });

### Team Roster:
|Name|Position|Captain|
|----|--------|-------|
|Bodo Illgner	|goalkeeper|	❌|
|Klaus Augenthaler	|defender|	❌|
|Guido Buchwald	|defender|	❌|
|Jürgen Kohler	|defender|	❌|
|Thomas Berthold	|defender|	❌|
|Andreas Brehme	|defender|	❌|
|Thomas Häßler	|midfielder|	❌|
|Lothar Matthäus	|midfielder|	✅|
|Pierre Littbarski	|midfielder|	❌|
|Rudi Völler	|forward|	❌|
|Jürgen Klinsmann	|forward|	❌|

### CSS Grid Layout:
        body {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100dvh;
        }

        .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        }

        .player-card {
        background-color: var(--white-color);
        padding: 1.3rem;
        margin: 1.2rem;
        width: 300px;
        border-radius: 15px;
        }

## Customization Options
### Modify Team Data:
Change properties in footballTeam object:
<ul>
<li>team (team name)</li>
<li>year (championship year)</li>
<li>headCoach (coach name)</li>
<li>players array (add/remove players)</li>
</ul>

### Change Card Colors:
Modify CSS variables in :root

## Position Filter Results
|Filter|Players|Shown|
|------|-------|-----|
|All|11 |players|
|Forward|	2|players|
|Midfielder|	3 |players|
|Defender|	5 |players|
|Goalkeeper|	1 |player|

## File Details

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| index.html | ~35 | ~1.2 KB | Structure with team stats, select dropdown, and card container |
| styles.css | ~70 | ~1.5 KB | Grid layout, flexbox cards, responsive styling, color variables |
| script.js | ~35 | ~1.3 KB | Team data object, filter logic, DOM manipulation, event handling |
| README.md | ~180 | ~4.5 KB | Complete documentation and usage guide |

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
