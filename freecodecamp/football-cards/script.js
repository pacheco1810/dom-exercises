let footballTeam = {
  team:"Germany",
  year:1990,
  headCoach:"Franz Beckenbauer",
  players:[
    {name:"Bodo Illgner", position:"goalkeeper", isCaptain:false},
    {name:"Klaus Augenthaler", position:"defender", isCaptain:false},
    {name:"Guido Buchwald", position:"defender", isCaptain:false},
    {name:"Jürgen Kohler", position:"defender", isCaptain:false},
    {name:"Thomas Berthold", position:"defender", isCaptain:false},
    {name:"Andreas Brehme", position:"defender", isCaptain:false},
    {name:"Thomas Häßler", position:"midfielder", isCaptain:false},
    {name:"Lothar Matthäus", position:"midfielder", isCaptain:true},
    {name:"Pierre Littbarski", position:"midfielder", isCaptain:false},
    {name:"Rudi Völler", position:"forward", isCaptain:false},
    {name:"Jürgen Klinsmann", position:"forward", isCaptain:false}]
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const coach = document.getElementById("head-coach");
team.innerText = footballTeam.team; 
year.innerText = footballTeam.year; 
coach.innerText = footballTeam.headCoach; 

const selectContainer = document.getElementById("players");
const playersCards = document.getElementById("player-cards");

function playerCards(playerPosition){
    const players =
    playerPosition === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          ({ position }) => position === playerPosition
        );

    return players
    .map(({ name, position, isCaptain }) => {
      return `
            <div class="player-card">
                <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
                <p>Position: ${position}</p>
            </div>
        `;
    }).join("");;
}

playersCards.innerHTML = playerCards("all");

selectContainer.addEventListener("change", () => {
  playersCards.innerHTML = playerCards(selectContainer.value);
});