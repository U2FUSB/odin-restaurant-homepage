export function loadAbout() {
    elementArray.forEach((element) => divContent.appendChild(element));
}
const divContent = document.body.querySelector("#content");
const introHeading = document.createElement("h2");
const intro = document.createElement("p");
const storyHeading = document.createElement("h2");
const story = document.createElement("p");
const missionHeading = document.createElement("h2");
const mission = document.createElement("p");
const teamHeading = document.createElement("h2");
const team = document.createElement("p");
const elementArray = [
    introHeading,
    intro,
    storyHeading,
    story,
    missionHeading,
    mission,
    teamHeading,
    team,
];
introHeading.textContent = "intro";
storyHeading.textContent = "story";
missionHeading.textContent = "mission";
teamHeading.textContent = "team";

intro.textContent="We make Ramen. Not the best... But Righteous Ramen! Be astonished by our loveless website."
story.textContent="One day we inherited a reastaurant, but had no skill to make Ramen. So now we focus more on marketing."
mission.textContent="We made it our personal mission to produce the most Righteous Ramen the world has haver seen, for 3 of 5 servings!"
team.textContent="We are a group of 1 persons. You can contact us at https://github.com/U2FUSB."