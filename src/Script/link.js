const projectCard = document.querySelector(".project");
const projectLink = document.querySelector(".projectLink");

function handleClick(event) {
    projectLink.click();
}

projectCard.addEventListener("click", handleClick);