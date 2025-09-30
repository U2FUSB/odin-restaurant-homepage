import img1 from "../pictures/pexels-airamdphoto-30682731.jpg";
import img5 from "../pictures/pexels-yulius-santoso-1587812313-30992156.jpg";

export function loadHomepage() {
    elementArray.forEach((element) => divContent.appendChild(element));
}

const divContent = document.body.querySelector("#content");

const title = document.createElement("h1");
const intro = document.createElement("p");
const picturesIntro = document.createElement("p");
const imageArray = [img1, img5].map((image, index) => {
    const img = document.createElement("img");
    img.className = "img" + index;
    img.src = image;
    img.alt = "Ramen Picture " + index;
    img.height = "300";
    return img;
});
const mission = document.createElement("p");
const selfLove = document.createElement("p");
const elementArray = [
    title,
    intro,
    picturesIntro,
    ...imageArray,
    mission,
    selfLove,
];

title.textContent = "Righteous Ramen";
title.className = "title";

intro.textContent = "Get your upright just ramen!";
intro.className = "intro";

picturesIntro.textContent = "Look at our honorable ramen pictures!!!";
picturesIntro.className = "picturesIntro";

mission.textContent =
    "Our restaurant has made it it's mission to serve the most noble, and conscientious ramen your mouth will ever taste.";
mission.className = "mission";

selfLove.textContent =
    "We are not just a restaurant, but an idea of heriosm and rightfulnes.";
selfLove.className = "selfLove";
