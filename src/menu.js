import img2 from "../pictures/pexels-amar-17593640.jpg";
import img3 from "../pictures/pexels-catscoming-1907229.jpg";
import img4 from "../pictures/pexels-rdne-6646369.jpg";

export function loadMenu() {
    elementArray.forEach((element) => divContent.appendChild(element));
}

const divContent = document.body.querySelector("#content");
const elementArray = [
    (function () {
        const menuTitle = document.createElement("h2");
        menuTitle.className = "menuTitle";
        menuTitle.textContent = "This is our beautiful Menu!";
        return menuTitle;
    })(),
    (function () {
        const menuFrame = document.createElement("div");
        menuFrame.className = "menuFrame";

        const menuElement1 = document.createElement("div");
        menuElement1.className = "menuElement";
        menuFrame.appendChild(menuElement1);
        {
            const dishName = document.createElement("p");
            const dishPicture = document.createElement("img");
            const dishDescription = document.createElement("p");
            dishName.textContent = "Ramen 1";
            dishPicture.src = img2;
            dishPicture.alt = "Picture of Ramen or similar";
            dishPicture.height = 300;
            dishDescription.textContent =
                "Very nice and sincere Ramen. Honestly!";
            menuElement1.appendChild(dishName);
            menuElement1.appendChild(dishPicture);
            menuElement1.appendChild(dishDescription);
        }

        const menuElement2 = document.createElement("div");
        menuElement2.className = "menuElement";
        menuFrame.appendChild(menuElement2);
        {
            const dishName = document.createElement("p");
            const dishPicture = document.createElement("img");
            const dishDescription = document.createElement("p");
            dishName.textContent = "Ramen 2";
            dishPicture.src = img3;
            dishPicture.alt = "Picture of Ramen or similar";
            dishPicture.height = 300;
            dishDescription.textContent = "So juicy and noble";
            menuElement2.appendChild(dishName);
            menuElement2.appendChild(dishPicture);
            menuElement2.appendChild(dishDescription);
        }

        const menuElement3 = document.createElement("div");
        menuElement3.className = "menuElement";
        menuFrame.appendChild(menuElement3);
        {
            const dishName = document.createElement("p");
            const dishPicture = document.createElement("img");
            const dishDescription = document.createElement("p");
            dishName.textContent = "Actually not Ramen 3";
            dishPicture.src = img4;
            dishPicture.alt = "Picture of Ramen or similar";
            dishPicture.height = 300;
            dishDescription.textContent =
                "As conscientious as it can be. You would imagine it could taste well.";
            menuElement3.appendChild(dishName);
            menuElement3.appendChild(dishPicture);
            menuElement3.appendChild(dishDescription);
        }
        return menuFrame;
    })(),
];
